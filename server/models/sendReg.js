const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const registerSchema = new Schema({
  username: String,
  email: String,
  admin: Boolean,
  warning: Number,
  blacklist: Boolean,
  scoreGame1: Number,
  scoreGame2: Number,
  scoreGame3: Number,
  scoreGame4: Number,
  password: String,
},{
  versionKey: false
});

module.exports = mongoose.model('sendReg', registerSchema, 'users');
