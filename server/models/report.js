const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = new Schema({
    reporter: String,
    reported: String,
    msg: String,
    validation: Boolean,
    reportedUsername: String,
    reporterUsername: String
})

module.exports = mongoose.model('report', reportSchema, 'reports')