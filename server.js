// express & path & cors import
const express = require('express');
const path = require('path');
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
const db = "mongodb+srv://TheGregouze:pastis51@devgames.wqtyv.mongodb.net/MainDB?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
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
app.post('/sendReg', require('./server/routes/sendReg'));




app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});
