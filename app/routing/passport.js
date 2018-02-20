var LocalStrategy = require('passport-local').Strategy;
var User = require('../../models/User');

module.exports = function(passport) {

//--------------------------------------
// Passport Session Setup
//--------------------------------------

passport.serializeUser(function(user, done) {
    done(null, user.id);
    console.log(user);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      console.log(user);
        done(err, user);
    });
});

//--------------------------------------
// Local Signup
//--------------------------------------
passport.use('local-signup', new LocalStrategy({
  username: 'username',
  email: 'email',
  password: 'password',
  passReqToCallback: true // allows us to pass back the entire request to the callback
}, function(req, email, password, done) {

  process.nextTick(function() {

    // find a user whose email is the same as the forms email
    User.findOne({
      'email': email
    }, function(err, user) {
      if (err)
        return done(err);
        console.log(err);

      // check to see if theres already a user with that email
      if (user) {
        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
      } else {

        // if there is no user with that email
        // create the user
        var newUser = new User();

        // set the user's local credentials
        newUser.password = password;
        newUser.email = email;
        newUser.password = newUser.generateHash(password);

        // save the user
        newUser.save(function(err) {
          if (err)
            throw err;
            console.log(err);
          return done(null, newUser);
          console.log(newUser);
        });
      }
    });
  });
}));

};
