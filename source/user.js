var $ = require('jQuery');
function clickThisButton() {
  $.get('/user', function(req,res) {
    console.log("success");
  });
}
