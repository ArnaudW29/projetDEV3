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

let json_data = require('../BACKEND/script-BDD/temp_data.json');

// get game1 description
router.get('/game_1', (req, res) => res.send(JSON.stringify(json_data.games[0].description)));

// get game2 description
router.get('/game_2', (req, res) => res.send(JSON.stringify(json_data.games[1].description)));

// get game3 description
router.get('/game_3', (req, res) => res.send(JSON.stringify(json_data.games[2].description)));

// get game4 description
router.get('/game_4', (req, res) => res.send(JSON.stringify(json_data.games[3].description)));

// test post request
// app.post("/add", (req, res) => {
//    const { a, b } = req.body;
//    res.send(`The sum is: ${Number(a) + Number(b)}`);
//});

// Export API routes
module.exports = router;