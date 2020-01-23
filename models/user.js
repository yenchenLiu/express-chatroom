'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        username: DataTypes.STRING
    });

    User.associate = function(models) {
        models.User.hasMany(models.Message);
    };

    return User;
};