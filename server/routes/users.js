// express import
const express = require('express');

// local imports
const User = require('../models/user');

// express router creation
const router = express.Router();

// ROUTES :

// get username from user id
router.get('/:id', function(req, res){
    console.log('get username');
    User.findById(req.params.id).exec(function(err, user){
        if(err){
            console.log("Error retrieving username");
        }else {
            res.json(users);
        }
    })
});




module.exports = router;