var express = require('express');

// Constants
var PORT = 3000;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('This is the second server\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
