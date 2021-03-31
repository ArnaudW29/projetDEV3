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

// EXAMPLE !
// Import contact controller
// var contactController = require('../contacts/contactController');
// Contact routes
// router.route('/contacts')
//     .get(contactController.index)
//     .post(contactController.new);
// router.route('/contacts/:contact_id')
//     .get(contactController.view)
//     .patch(contactController.update)
//     .put(contactController.update)
//     .delete(contactController.delete);

// variables
const json_data = '{' +
    '"games":[' +
        '{' +
            '"name":"game_1",' +
            '"description":"<p style=\'border:1px solid #77216f;border-radius:5px;padding:10px\' class=\'horizontal_center\'>ceci est la description du premier jeu</p>",' + 
            '"hardcoded_leaderboard": {"pseudo1": "XXXX", "pseudo2": "XXXY", "pseudo3": "XYXY", "pseudo4": "YYYX", "pseudo5": "YYYY"}' +
        '},' +
        '{' +
            '"name":"game_2",' +
            '"description":"<p style=\'border:1px solid #77216f;border-radius:5px;padding:10px\' class=\'horizontal_center\'>ceci est la description du deuxieme jeu</p>",' +
            '"hardcoded_leaderboard": {"pseudo4": "XYYX", "pseudo3": "XXY", "pseudo1": "XYXY"}' +
        '},' +
        '{' +
            '"name":"game_3",' +
            '"description":"<p style=\'border:1px solid #77216f;border-radius:5px;padding:10px\' class=\'horizontal_center\'>ceci est la description du troisieme jeu</p>",' +
            '"hardcoded_leaderboard": {"pseudo2": "X"}' +
        '},' +
        '{' +
            '"name":"game_4",' + 
            '"description":"<p style=\'border:1px solid #77216f;border-radius:5px;padding:10px\' class=\'horizontal_center\'>ceci est la description du quatrieme jeu</p>",' +
            '"hardcoded_leaderboard": {"pseudo6": "XXXX", "pseudo7": "XXXY", "pseudo10": "YYYY"}' +
        '}' +
    ']' +
'}'

let data = JSON.parse(json_data);

// get game1 description
router.get('/game_1', (req, res) => res.send(data.games[0].description));

// get game2 description
router.get('/game_2', (req, res) => res.send(data.games[1].description));

// get game3 description
router.get('/game_3', (req, res) => res.send(data.games[2].description));

// get game4 description
router.get('/game_4', (req, res) => res.send(data.games[3].description));

// get game1 leaderbord
router.get('/leaderboard/game_1', (req, res) => res.send(data.games[0].hardcoded_leaderboard));

// get game2 leaderbord
router.get('/leaderboard/game_2', (req, res) => res.send(data.games[1].hardcoded_leaderboard));

// get game3 leaderbord
router.get('/leaderboard/game_3', (req, res) => res.send(data.games[2].hardcoded_leaderboard));

// get game4 leaderbord
router.get('/leaderboard/game_4', (req, res) => res.send(data.games[3].hardcoded_leaderboard));

// test post request
// app.post("/add", (req, res) => {
//    const { a, b } = req.body;
//    res.send(`The sum is: ${Number(a) + Number(b)}`);
//});

// Export API routes
module.exports = router;