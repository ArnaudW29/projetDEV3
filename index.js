const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;


app.get('/FRONTEND', function(req, res) {
    res.sendFile(path.join(__dirname,'FRONTEND ','/index.html'));
});

app.use(express.static('FRONTEND'))


app.listen(port, () => console.log(`projetDev3 on port ${port}!`));
