// Initialize express router
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Game = require('../models/game');

//Variables
const gameid_1 = "60772f2259476cd653c5f928";
const gameid_2 = "6077357159476cd653c5f92e";
const gameid_3 = "6077358b59476cd653c5f92f";
const gameid_4 = "607735a259476cd653c5f930";


// Connexion a la DB sur Atlas
const db = "mongodb+srv://TheGregouze:pastis51@devgames.wqtyv.mongodb.net/MainDB?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error! " + err);
    }
});

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});


// EXAMPLE !
// Import contact controller
// var contactController = require('../contacts/contactController');
// Contact routes
// router.route('/contacts')
//     .get(contactController.index)
//     .post(contactController.new);
// router.route('/contacts/:contact_id')
//     .get(contactController.view)
//     .patch(contactController.update)
//     .put(contactController.update)
//     .delete(contactController.delete);

// get game1 description
router.get('/game_1', function(req, res){
    Game.findById(gameid_1).exec(function(err, games){
        if(err){
            console.log("Error retrieving game 1");
        }else {
            res.json(games.description);
        }
    })
});

// get game2 description
router.get('/game_2', function(req, res){
    Game.findById(gameid_2).exec(function(err, games){
        if(err){
            console.log("Error retrieving game 2");
        }else {
            res.json(games.description);
        }
    })
});
// get game3 description
router.get('/game_3', function(req, res){
    Game.findById(gameid_3).exec(function(err, games){
        if(err){
            console.log("Error retrieving game 3");
        }else {
            res.json(games.description);
        }
    })
});
// get game4 description
router.get('/game_4', function(req, res){
    Game.findById(gameid_4).exec(function(err, games){
        if(err){
            console.log("Error retrieving game 4");
        }else {
            res.json(games.description);
        }
    })
});

// test post request
// app.post("/add", (req, res) => {
//    const { a, b } = req.body;
//    res.send(`The sum is: ${Number(a) + Number(b)}`);
//});

// Export API routes
module.exports = router;