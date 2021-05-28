// express import
const express = require('express');

// local imports
const Game = require('../models/game');

// express router creation
const router = express.Router();

// middlewares
const { isAGame } = require('../middlewares/game');

// ROUTES :

router.get('/description/:jeu', isAGame, function(req, res) {
    Game.find({ gamelib : req.params.jeu }).exec(function(err, games){
        if(err){
            res.sendStatus(404);
        }else {
            res.json(games[0].description);
        }
    })
});

router.get('/leaderboard/:jeu', isAGame, function(req, res) {
    Game.find({ gamelib : req.params.jeu }).exec(function(err, games){
        if(err){
            res.sendStatus(404);
        }else {
            res.json(games[0].leaderboard);
        }
    })
});

// get game icon
router.get('/game_icon/:id', function(req, res){
    let icon_path = "assets/img/icons/" + req.params.id + ".png";
    res.sendFile(icon_path, { root: '.'});
});

// get game image
router.get('/image/:id', function(req, res){
    let icon_path = "assets/img/" + req.params.id + ".png";
    res.sendFile(icon_path, { root: '.'});
});




module.exports = router;