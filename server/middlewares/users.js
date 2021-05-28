// local imports
User = require('../models/user')

function checkUserCredentials(req, res, next) {
    User.find({ username:req.body.username, password:req.body.password }).exec(function(err, user) {
        if(err) {
            res.sendStatus(404);
        }else if(user.length === 0) {
            res.sendStatus(422);
        } else {
            next();
        };
    });
};

module.exports = {
    checkUserCredentials
};