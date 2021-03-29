// Import express
let express = require('express');
// Import Mongoose
let mongoose = require('mongoose');
// import cors
let cors = require('cors');
// Initialise the app
let app = express();

// Import routes
let apiRoutes = require("./router/api");
// Configure bodyparser to handle post requests
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
// Connect to Mongoose and set connection variable
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost/resthub', { useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 5000;

// Send message for default URL
app.get('/', cors(), (req, res) => res.send('Hello World with Express'));


// get game1 description
let game_1_description = "<p style='border:1px solid #77216f;border-radius:5px;padding:10px' class='horizontal_center'>ceci est la description du premier jeu</p>"
app.get('/description/game_1', cors(), (req, res) => res.send(game_1_description));

// get game2 description
let game_2_description = "<p style='border:1px solid #77216f;border-radius:5px;padding:10px' class='horizontal_center'>ceci est la description du deuxieme jeu</p>"
app.get('/description/game_2', cors(), (req, res) => res.send(game_2_description));

// get game3 description
let game_3_description = "<p style='border:1px solid #77216f;border-radius:5px;padding:10px' class='horizontal_center'>ceci est la description du troisieme jeu</p>"
app.get('/description/game_3', cors(), (req, res) => res.send(game_3_description));

// get game4 description
let game_4_description = "<p style='border:1px solid #77216f;border-radius:5px;padding:10px' class='horizontal_center'>ceci est la description du quatrieme jeu</p>"
app.get('/description/game_4', cors(), (req, res) => res.send(game_4_description));

// get game1 leaderbord
let game_1_leaderboard = {"pseudo1": "XXXX", "pseudo2": "XXXY", "pseudo3": "XYXY", "pseudo4": "YYYX", "pseudo5": "YYYY"}
app.get('/leaderboard/game_1', cors(), (req, res) => res.send(game_1_leaderboard));

// get game2 leaderbord
let game_2_leaderboard = {"pseudo4": "XYYX", "pseudo3": "XXY", "pseudo1": "XYXY"}
app.get('/leaderboard/game_2', cors(), (req, res) => res.send(game_2_leaderboard));

// get game3 leaderbord
let game_3_leaderboard = {"pseudo2": "X"}
app.get('/leaderboard/game_3', cors(), (req, res) => res.send(game_3_leaderboard));

// get game4 leaderbord
let game_4_leaderboard = {"pseudo6": "XXXX", "pseudo7": "XXXY", "pseudo10": "YYYY"}
app.get('/leaderboard/game_4', cors(), (req, res) => res.send(game_4_leaderboard));

// test post request
// app.post("/add", (req, res) => {
//    const { a, b } = req.body;
//    res.send(`The sum is: ${Number(a) + Number(b)}`);
//});

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});