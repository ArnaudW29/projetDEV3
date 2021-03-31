// Initialize express router
const express = require('express');
const router = express.Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

let json_data = require('../BACKEND/script-BDD/temp_data.json');

// get game1 leaderbord
router.get('/game_1', (req, res) => res.send(json_data.games[0].hardcoded_leaderboard));

// get game2 leaderbord
router.get('/game_2', (req, res) => res.send(json_data.games[1].hardcoded_leaderboard));

// get game3 leaderbord
router.get('/game_3', (req, res) => res.send(json_data.games[2].hardcoded_leaderboard));

// get game4 leaderbord
router.get('/game_4', (req, res) => res.send(json_data.games[3].hardcoded_leaderboard));

// test post request
// app.post("/add", (req, res) => {
//    const { a, b } = req.body;
//    res.send(`The sum is: ${Number(a) + Number(b)}`);
//});

// Export API routes
module.exports = router;