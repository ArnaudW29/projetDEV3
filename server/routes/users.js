// express import
const express = require('express');

// local imports
const User = require('../models/user');

// express router creation
const router = express.Router();

// ROUTES :

// get user from user id
router.get('/:id', function(req, res){
    User.findById(req.params.id).exec(function(err, user){
        if(err){
            console.log("Error retrieving username");
        }else {
            res.json(user);
        }
    })
});

// get username from user id
router.get('/username/:id', function(req, res){
    User.findById(req.params.id).exec(function(err, user){
        if(err){
            console.log("Error retrieving username");
        }else {
            res.json(user.username);
        }
    })
});




module.exports = router;