const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    psw: String,
    email: String,
    admin: Boolean,
    warning: Number,
    blacklist: Boolean,
    scoreGame1: Number,
    scoreGame2: Number,
    scoreGame3: Number,
    scoreGame4: Number
})

module.exports = mongoose.model('user', userSchema, 'users')
