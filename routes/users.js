const models  = require('../models');
const express = require('express');

const router = express.Router();

router.post('/messages/create', function (req, res) {
    console.log(req.params.user_id);
  models.Message.create({
    content: req.body.content,
    UserId: req.user.id,
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
