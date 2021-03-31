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

// get game1 description
let game_1_description = "<p style='border:1px solid #77216f;border-radius:5px;padding:10px' class='horizontal_center'>ceci est la description du premier jeu</p>"
router.get('/game_1', (req, res) => res.send(game_1_description));

// get game2 description
let game_2_description = "<p style='border:1px solid #77216f;border-radius:5px;padding:10px' class='horizontal_center'>ceci est la description du deuxieme jeu</p>"
router.get('/game_2', (req, res) => res.send(game_2_description));

// get game3 description
let game_3_description = "<p style='border:1px solid #77216f;border-radius:5px;padding:10px' class='horizontal_center'>ceci est la description du troisieme jeu</p>"
router.get('/game_3', (req, res) => res.send(game_3_description));

// get game4 description
let game_4_description = "<p style='border:1px solid #77216f;border-radius:5px;padding:10px' class='horizontal_center'>ceci est la description du quatrieme jeu</p>"
router.get('/game_4', (req, res) => res.send(game_4_description));

// get game1 leaderbord
let game_1_leaderboard = {"pseudo1": "XXXX", "pseudo2": "XXXY", "pseudo3": "XYXY", "pseudo4": "YYYX", "pseudo5": "YYYY"}
router.get('/leaderboard/game_1', (req, res) => res.send(game_1_leaderboard));

// get game2 leaderbord
let game_2_leaderboard = {"pseudo4": "XYYX", "pseudo3": "XXY", "pseudo1": "XYXY"}
router.get('/leaderboard/game_2', (req, res) => res.send(game_2_leaderboard));

// get game3 leaderbord
let game_3_leaderboard = {"pseudo2": "X"}
router.get('/leaderboard/game_3', (req, res) => res.send(game_3_leaderboard));

// get game4 leaderbord
let game_4_leaderboard = {"pseudo6": "XXXX", "pseudo7": "XXXY", "pseudo10": "YYYY"}
router.get('/leaderboard/game_4', (req, res) => res.send(game_4_leaderboard));

// test post request
// app.post("/add", (req, res) => {
//    const { a, b } = req.body;
//    res.send(`The sum is: ${Number(a) + Number(b)}`);
//});

// Export API routes
module.exports = router;