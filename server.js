const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', function(req, res) {
    res.sendFile(__dirname +'/index.html');
})

app.get('/login', function(req, res) {
    res.json({'name':'being zero','age':'2 years'});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))