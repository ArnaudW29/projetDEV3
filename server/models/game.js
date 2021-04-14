const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gameSchema = new Schema({
    gamelib: String,
    description: String,
    leaderboard: Array
})

module.exports = mongoose.model('game', gameSchema, 'games')