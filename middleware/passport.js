const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const models = require('../models');

passport.use(new LocalStrategy(
    function(username, password, done) {
        models.User.findOne({ where: {username: username} })
            .then(function ( user) {

            // 如果使用者不存在
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }

            // 如果使用者密碼錯誤
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }

            // 認證成功，回傳使用者資訊 user
            return done(null, user);
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

module.exports = passport;