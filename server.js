// express & path & cors import
const express = require('express');
const path = require('path');
const router = express.Router();
let cors = require('cors');
const bodyParser = require('body-parser');

// middlewares
const { uniqueUsername } = require('./server/middlewares/users');

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

  socket.on('joinGame', function (data){
    if (socket.room === data.roomName){
      console.log('rien ne se passe');
    }

    else {
      leaveRoom()
      joinRoom(data)}
      io.in(data.roomName).allSockets().then(result=>{
        console.log(result.size)
        connectedUsers= result.size
        socket.emit('connectedUsers', { room : data.roomName, nbConnecté: connectedUsers})
        if (connectedUsers==2){
          io.in(data.roomName).emit('startGame', data.roomName)
        }
      })
  })

  function joinRoom(data){
    socket.join(data.roomName);
    socket.room= data.roomName;
    console.log( socket.username + ' a rejoint : ' + socket.room)
    io.in(socket.room).emit("newUser", {username: socket.username, message: ' a rejoint le chat'});
  }

  function leaveRoom(){
    socket.leaveAll();
    connectedUsers=io.in(socket.room).allSockets().then().size
    console.log(connectedUsers+ " SUR LE SERVEUR dans la room  " + socket.room + "que je viens de quitter")
    socket.emit('disconnectedUsers', { room : socket.room, nbConnecté: connectedUsers})
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

app.use('/games', require('./server/routes/games'));
app.use('/admin', require('./server/routes/admin'));
app.use('/users', require('./server/routes/users'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


http.listen(port, function(){
    console.log("Server running on localhost:" + port);
});


module.exports = app;
