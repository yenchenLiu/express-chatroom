const express = require('express');
const router = express.Router();

const passport = require('../middleware/passport');


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

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/auth/login');
});


module.exports = router;
