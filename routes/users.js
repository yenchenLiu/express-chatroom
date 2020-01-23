var models  = require('../models');
var express = require('express');
var router = express.Router();


router.post('/create', function(req, res) {
  models.User.createUser( req.body.username, req.body.password)
      .then(function() {
        res.redirect('/');
      });
});

router.get('/:user_id/destroy', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

router.post('/:user_id/messages/create', function (req, res) {
  models.Message.create({
    content: req.body.content,
    UserId: req.params.user_id
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:user_id/messages/:message_id/destroy', function (req, res) {
  models.Message.destroy({
    where: {
      id: req.params.message_id
    }
  }).then(function() {
    res.redirect('/');
  });
});



module.exports = router;
