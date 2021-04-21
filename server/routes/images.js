// express import
const express = require('express');

// express router creation
const router = express.Router();

// ROUTES :

// get game icon
router.get('/game_icon/:id', function(req, res){
    let icon_path = "assets/img/icons/" + req.params.id + ".png";
    res.sendFile(icon_path, { root: '.'});
});

// get game image
router.get('/games/:id', function(req, res){
    let icon_path = "assets/img/" + req.params.id + ".png";
    res.sendFile(icon_path, { root: '.'});
});



module.exports = router;