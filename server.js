// express & path & cors import
const express = require('express');
const path = require('path');
const SendReg = require('./server/models/sendReg');
const router = express.Router();
let cors = require('cors');
const bodyParser = require('body-parser');

// express app creation
const app = express();

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
<<<<<<< Updated upstream
app.post('/sendReg', require('./server/routes/sendReg'));
=======
app.post('/sendReg', function(req ,res){
  console.log('post data');
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
      console.log('Error saving user');
    } else{
      res.json(insertedUser)
    }
  })
});
>>>>>>> Stashed changes




app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});
