const models = require('../models');
const express = require('express');

const { isAdmin } = require('../middleware/auth');

const router = express.Router();

router.post('/create', isAdmin, function (req, res) {
    models.User.createUser(req.body.username, req.body.password)
        .then(function () {
            res.redirect('/');
        });
});

router.post('/:user_id/destroy', isAdmin, function (req, res) {
    models.User.destroy({
        where: {
            id: req.params.user_id
        }
    }).then(function () {
        res.redirect('/');
    });
});


module.exports = router;
