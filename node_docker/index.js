var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world <img src="url.png" alt="some_text"> \n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
