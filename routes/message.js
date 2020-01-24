const models = require('../models');
const express = require('express');

const router = express.Router();

router.post('/messages/create', function (req, res) {
    models.Message.create({
        content: req.body.content,
        UserId: req.user.id,
    }).then(function (message) {
        return Promise.all([
            Promise.resolve(message),
            models.User.findOne({ where: {id: message.UserId} }),
        ])
    }).then(function ([message, user]) {
            const emitMessage = ["NewMessage", message.content, user.username, message.createdAt];
            res.app.emit("newMessage", JSON.stringify(emitMessage));
            res.redirect('/');
        });
});


module.exports = router;
