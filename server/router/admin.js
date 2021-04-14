// Initialize express router
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Report = require('../models/report');

// Connexion a la DB sur Atlas
const db = "mongodb+srv://TheGregouze:pastis51@devgames.wqtyv.mongodb.net/MainDB?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error! " + err);
    }
});


// Set default API response
router.get('/reports', function(req, res){
    console.log('get request for all reports');
    Report.find({}).exec(function(err, reports){
        if(err){
            console.log("Error retrieving reports");
        }else {
            res.json(reports);
        }
    })
});

// test post request
// app.post("/add", (req, res) => {
//    const { a, b } = req.body;
//    res.send(`The sum is: ${Number(a) + Number(b)}`);
//});

// Export API routes
module.exports = router;