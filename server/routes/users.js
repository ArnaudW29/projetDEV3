// express import
const express = require('express');

// local imports
const User = require('../models/user');

// express router creation
const router = express.Router();

// ROUTES :

// [GET] user from user id
router.get('/:id', function(req, res){
    User.findById(req.params.id).exec(function(err, user){
        if(err){
            res.sendStatus(404);
        }else {
            res.json(user);
        }
    })
});

// [GET] username from user id
router.get('/username/:id', function(req, res){
    User.findById(req.params.id).exec(function(err, user){
        if(err){
            res.sendStatus(404);
        }else {
            res.json(user.username);
        }
    })
});

// [GET] email from username
router.get('/email/:usr', function(req, res){
    // User.find({ username:usrname, password:psw}).exec(function(err, user){
    User.find({ username: req.params.usr }, function(err, users){
        if(err){
            res.sendStatus(404);
        }else {
            res.json(users[0].email);
        }
    })
});

// [GET] admin status from username
router.get('/isAdmin/:usr', function(req, res){
    // User.find({ username:usrname, password:psw}).exec(function(err, user){
    User.find({ username: req.params.usr }, function(err, users){
        if(err){
            res.sendStatus(404);
        }else {
            res.json(users[0].admin);
        }
    })
});

// [GET] api route /users
router.get('', function(req, res){
  User.find({},function(err, foundUser){
    res.json(foundUser)
  })
});

module.exports = router;
