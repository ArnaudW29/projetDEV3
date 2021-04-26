const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const registerSchema = new Schema({
  username:
    {
      type : String, min: [4, 'Too short, min is 4 characters'], max: [32, 'Too long, max is 32 characters']
    },
  email:
    {
      type : String, min: [4, 'Too short, min is 4 characters'], max: [32, 'Too long, max is 32 characters'],
      unique : true, lowercase : true, required : 'Email is Required', match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
  password:
    {
      type : String, min: [4, 'Too short, min is 4 characters'], max: [32, 'Too long, max is 32 characters',
        required : 'Password is Required']
},
  admin: False,
  warning: 0,
  blacklist: False,
  scoreGame1: 0,
  scoreGame2: 0,
  scoreGame3: 0,
  scoreGame4: 0
sendReg : [{type : Schema.Types.ObjectId, ref : 'user'}]
});
module.exports = mongoose.model('sendReg', registerSchema, 'users');
