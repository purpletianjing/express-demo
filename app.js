var express = require('express');
var app = express();
var router = require('./routes/route.js');
var bodyParser = require('body-parser');

app.get('/', function(req, res) {
  res.send('Hello World');
});

router.setRoutes(app);

app.listen(3001);
console.log("listen to: localhost:3001");
