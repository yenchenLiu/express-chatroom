const models  = require('../models');
const express = require('express');

const isLoggedIn = require('../middleware/auth');

const router = express.Router();

router.get('/', isLoggedIn, function(req, res) {
    console.log(req.user);
  Promise.all([
  models.User.findAll({
    include: [models.Message]
  }),
        models.Message.findAll({
          include: models.User
        })
      ]

  ).then(function([users, messages]) {
    res.render('index', {
      title: 'Chat Room',
      reqUser: req.user,
      users: users,
      messages: messages,
    });
  });
});

module.exports = router;
