const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;


app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname,'FRONTEND ','/index.html'));
});



app.listen(port, () => console.log(`projetDev3 on port ${port}!`));