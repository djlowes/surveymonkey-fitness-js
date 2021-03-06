const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
var bcrypt   = require('bcrypt-nodejs');

const User = new Schema({
  email: String,
  password: { type: String, select: false },
});

// User.plugin(passportLocalMongoose);

// Generate Hash
User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Is Password Valid?
User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);
