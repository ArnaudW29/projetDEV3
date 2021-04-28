const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    gamelib: String,
    roomName: Number,
    connectedUsers: Number
})

module.exports = mongoose.model('room', roomSchema, 'rooms')