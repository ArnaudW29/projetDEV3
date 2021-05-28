// local imports
Game = require('../models/game')

function isAGame(req, res, next) {
    Game.find({ gamelib:req.params.jeu }).exec(function(err, game) {
        if(err) {
            res.sendStatus(404);
        }else if(game.length === 0) {
            res.sendStatus(422);
        } else {
            next();
        };
    });
}




module.exports = {
    isAGame
};