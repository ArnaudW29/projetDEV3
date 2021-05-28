// express import
const express = require('express');

// local imports
const Report = require('../models/report');

// express router creation
const router = express.Router();

// ROUTES :

// get all reports
router.get('/reports', function(req, res){
    Report.find({}).exec(function(err, reports){
        if(err){
            res.sendStatus(404);
        }else {
            res.json(reports);
        }
    })
});




module.exports = router;