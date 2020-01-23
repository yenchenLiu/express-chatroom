const express = require('express');

const passport = require('../middleware/passport');
const models = require('../models');

const router = express.Router();

router.get('/login', function(req, res) {
    res.render('login');
});

// Login Request
router.post('/login', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/auth/login',
    }
));

router.get('/signup', function(req, res) {
    res.render('signup');
});

// Signup Request
router.post('/signup', function(req, res) {
    models.User.createUser( req.body.username, req.body.password)
        .then(function() {
            res.redirect('/');
        });
});

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/auth/login');
});


module.exports = router;
