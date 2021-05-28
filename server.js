// express & path & cors import
const express = require('express');
const path = require('path');
const SendReg = require('./server/models/sendReg');
const router = express.Router();
let cors = require('cors');
const bodyParser = require('body-parser');

// express app creation
const app = express();

//IO
const http= require('http').createServer(app);
const io= require('socket.io')(http,{
  cors:{
    origins: ['http://localhost:4200']
  }
});

io.on('connection', function(socket){
  console.log('A user connected')
  socket.on('username', function (username){
      socket.username= username;
      console.log(socket.username + " enregistré dans la socket")
  });


  socket.on('newMsg', function(data){
    console.log('msg serveur reçu : ' + data)
    io.in(socket.room).emit('newMsg', {username: socket.username, message: data.message});

  })
  /* Non fonctionnel je sais pas pourquoi, à réessayer si l'envie me vient
  socket.on('isWriting' ,function(data){
    console.log( " passé serveur")
    io.in(socket.room).broadcast.emit('isWriting',{username: socket.username, message: " est en train d'écrire..."})
  })

  socket.on('notWriting' ,function(data){
    io.in(socket.room).broadcast.emit('notWriting',{username: socket.username, message: " est en train d'écrire..."})
  })*/

  socket.on('disconnect', function(){
      io.in(socket.room).emit("leavingUser", {username: socket.username, message: ' a quitté le chat'});

      console.log('user disconnected');
  })

  socket.on('joinRoom', function(data){
    // Vérifie que l'utilisateur ne soit pas déja dans la room dans laquelle il veut se connecter ( évite le spam de msg )
    if (socket.room === data.roomName){
      console.log('rien ne se passe');
    }
    else {
    leaveRoom()
    joinRoom(data)}
  })

  socket.on('joinGame',function (data){

  })

  function joinRoom(data){
    socket.join(data.roomName);
    socket.room= data.roomName;
    console.log( socket.username + ' a rejoint : ' + socket.room)
    io.in(socket.room).emit("newUser", {username: socket.username, message: ' a rejoint le chat'});
  }

  function leaveRoom(){
    socket.leaveAll();
    socket.broadcast.to(socket.room).emit("leavingUser", {username: socket.username, message: ' a quitté le chat'});
    socket.room = null ;
  }

});

// variables
const port = process.env.PORT || 3000


// mongoose import & connexion
const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
const url = "mongodb+srv://TheGregouze:pastis51@devgames.wqtyv.mongodb.net/MainDB?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(url, function(err){
    if(err){
        console.error('Error : ' + err);
    }
});

// link to angular static files
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'dist')));

// routes
app.use(cors());

app.use('/description', require('./server/routes/description'));
app.use('/leaderboard', require('./server/routes/leaderboard'));
app.use('/admin', require('./server/routes/admin'));
app.use('/users', require('./server/routes/users'));
app.use('/images', require('./server/routes/images'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//post
app.post('/sendReg', function(req ,res){
  var newUser = new SendReg();
  newUser.username = req.body.username;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.admin = false;
  newUser.warning = 0;
  newUser.blacklist = false;
  newUser.scoreGame1 = 0;
  newUser.scoreGame2 = 0;
  newUser.scoreGame3 = 0;
  newUser.scoreGame4 = 0;
  newUser.save(function(err, insertedUser){
    if(err){
      res.sendStatus(404);
    } else{
      res.json(insertedUser)
    }
  })
});



// local imports
const User = require('./server/models/user');


app.post('/login/userpsw', function(req, res){
  let usrname = req.body.username;
  let psw = req.body.password;
  User.find({ username:usrname, password:psw}).exec(function(err, user){
    if(err){
        res.sendStatus(404);
    }
    if(user.length != 0){
        res.json(true);
    }
    else{
      res.json(false)
    }
  })
});


http.listen(port, function(){
    console.log("Server running on localhost:" + port);
});


module.exports = app;
