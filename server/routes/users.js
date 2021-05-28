// express import
const express = require('express');

// express router creation
const router = express.Router();

// middlewares
const { checkUserCredentials, uniqueUsername } = require('../middlewares/users');

// local imports
const User = require('../models/user');
const SendReg = require('../models/sendReg');

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

// [DELETE] api route /users
router.delete('/', checkUserCredentials, function(req ,res) {
    if(!req.body.username || !req.body.password) {
        res.sendStatus(422);
    } else {
        let usrname = req.body.username;
        let psw = req.body.password;
        User.deleteOne({ username:usrname, password:psw }).exec(function(err) {
            if(err) {
                res.sendStatus(404);
            }else {
                res.sendStatus(200);
            };
        })
    };
});

//post
router.put('/sendReg', uniqueUsername, function(req ,res){
    if(!req.body.username || !req.body.password || !req.body.email) {
      res.sendStatus(422);
    } else {
      var newUser = new SendReg();
      newUser.username = req.body.username;
      newUser.email = req.body.email;
      newUser.password = req.body.password;
      newUser.admin = false;
      newUser.warning = 0;
      newUser.blacklist = false;
      newUser.scoreGame1 = 0;
      newUser.scoreGame2 = 0;
      newUser.scoreGame3 = 0;
      newUser.scoreGame4 = 0;
      newUser.save(function(err, insertedUser){
        if(err){
          res.sendStatus(404);
        } else{
          res.json(insertedUser)
        }
      })
    }
  });


router.post('/login/userpsw', function(req, res){
  let usrname = req.body.username;
  let psw = req.body.password;
  User.find({ username:usrname, password:psw}).exec(function(err, user){
    if(err){
        res.sendStatus(404);
    }
    if(user.length != 0){
        res.json(true);
    }
    else{
      res.json(false)
    }
  })
});

module.exports = router;
