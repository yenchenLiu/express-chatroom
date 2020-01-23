var models  = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  Promise.all([
  models.User.findAll({
    include: [models.Message]
  }),
        models.Message.findAll({
          include: models.User
        })
      ]

  ).then(function([users, messages]) {
    console.log(messages);
    res.render('index', {
      title: 'Chat Room',
      users: users,
      messages: messages,
    });
  });
});


module.exports = router;
