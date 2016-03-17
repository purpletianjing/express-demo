var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;

var userSchema= new Schema({
  id: Number,
  name: String,
  email: String
});

userSchema.statics.findOneWithId = function() {
  return this.find({id: 1});
};

var User = mongoose.model('User', userSchema);

var user = new User({
  id: 1,
  name: 'purple',
  email: 'a@b.com'
});

user.save(function(err, user) {
  if (err) {
    return console.error(err);
  }
})

module.exports = User;
