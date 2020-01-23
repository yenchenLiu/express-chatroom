'use strict';
const sjcl = require('sjcl');

module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING,
    });

    User.associate = function(models) {
        models.User.hasMany(models.Message);
    };

    User.createUser = function(username, password) {
        return this.create({
            username: username,
            password: sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(username + password)),
            role: "user"
        })
    };

    User.prototype.validPassword = function (password) {
      return this.password === sjcl.codec.hex.fromBits(sjcl.hash.sha256.hash(this.username + password))
    };

    return User;
};