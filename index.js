// Import express
let express = require('express');
// Import Mongoose
let mongoose = require('mongoose');
// import cors
let cors = require('cors');
// Initialise the app
let app = express();
let path = require('path');

// Import routes
let apiRoutes = require("./router/description");
// Configure bodyparser to handle post requests
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cors());
// Connect to Mongoose and set connection variable
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
var db = mongoose.connection;

// initialize routes
app.use('/description',require('./router/description'));
app.use('/leaderboard',require('./router/leaderboard'));


// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 3000;

// Send message for default URL
app.get('/FRONTEND', function(req, res) {
    // res.sendFile(path.join(__dirname + '/FRONTEND' + '/index.html'));
    res.sendFile(path.normalize(__dirname + '/FRONTEND/dist/FRONTEND/index.html'))
});
app.use(express.static('FRONTEND'))

// error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});