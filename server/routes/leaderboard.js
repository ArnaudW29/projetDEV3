// express import
const express = require('express');

// local imports
const Game = require('../models/game');

// express router creation
const router = express.Router();

//Variables
const gameid_1 = "60772f2259476cd653c5f928";
const gameid_2 = "6077357159476cd653c5f92e";
const gameid_3 = "6077358b59476cd653c5f92f";
const gameid_4 = "607735a259476cd653c5f930";

// ROUTES :

// get game1 leaderbord
router.get('/morpion', function(req, res){
    Game.findById(gameid_1).exec(function(err, games){
        if(err){
            res.sendStatus(404);
        }else {
            res.json(games.leaderboard.sort(function(a, b){return b.score-a.score}));
        }
    })
});

// get game2 leaderbord
router.get('/421', function(req, res){
    Game.findById(gameid_2).exec(function(err, games){
        if(err){
            res.sendStatus(404);
        }else {
            res.json(games.leaderboard.sort(function(a, b){return b.score-a.score}));
        }
    })
});

// get game3 leaderbord
router.get('/puissance4', function(req, res){
    Game.findById(gameid_3).exec(function(err, games){
        if(err){
            res.sendStatus(404);
        }else {
            res.json(games.leaderboard.sort(function(a, b){return b.score-a.score}));
        }
    })
});

// get game4 leaderbord
router.get('/garticPhones', function(req, res){
    Game.findById(gameid_4).exec(function(err, games){
        if(err){
            res.sendStatus(404);
        }else {
            res.json(games.leaderboard.sort(function(a, b){return b.score-a.score}));
        }
    })
});




module.exports = router;