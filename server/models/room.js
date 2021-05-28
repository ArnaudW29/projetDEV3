const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    gameName: String,
    roomName: Number,
})

module.exports = mongoose.model('room', roomSchema, 'rooms')
