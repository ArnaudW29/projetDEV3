// express import
const express = require('express');

// local imports
const Report = require('../models/report');

// express router creation
const router = express.Router();

// ROUTES :

// get all reports
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




module.exports = router;