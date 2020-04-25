var express = require('express');
var app = express();
var port = 3000;


app.get('/', function(req, res) {
	res.send('Welcome to my app');
})

app.get('/users', function (req, res) {
  res.send('Got a POST request')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))