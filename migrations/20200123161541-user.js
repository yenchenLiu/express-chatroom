'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Users', 'password', Sequelize.STRING),
      queryInterface.addColumn('Users', 'role', Sequelize.STRING),
      queryInterface.changeColumn('Users', 'username', {
        type: Sequelize.STRING,
        unique: true
      })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Users', 'password'),
      queryInterface.removeColumn('Users', 'role'),
      queryInterface.changeColumn('Users', 'username', {
        type: Sequelize.STRING
      })
    ])
  }
};
