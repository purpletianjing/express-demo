var express = require('express');
var router = express.Router();
var user = require('../models/users.js');

router.get('/user', function(req, res) {
  console.log(user.findOneWithId());
  res.send("sun");
});

module.exports = router;
