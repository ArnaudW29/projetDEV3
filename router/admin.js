// Initialize express router
const express = require('express');
const router = express.Router();
// Set default API response
let json_data = require('../BACKEND/script-BDD/temp_data.json');
router.get('/', function (req, res) {
    res.send(json_data.admin_logs);
});

// test post request
// app.post("/add", (req, res) => {
//    const { a, b } = req.body;
//    res.send(`The sum is: ${Number(a) + Number(b)}`);
//});

// Export API routes
module.exports = router;