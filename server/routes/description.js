// express import
const express = require('express');

// local imports
const Game = require('../models/game');

// express router creation
const router = express.Router();

// middlewares
const { isAGame } = require('../middlewares/game');

// ROUTES :

router.get('/:jeu', isAGame, function(req, res) {
    Game.find({ gamelib : req.params.jeu }).exec(function(err, games){
        if(err){
            res.sendStatus(404);
        }else {
            res.json(games[0].description);
        }
    })
});




module.exports = router;