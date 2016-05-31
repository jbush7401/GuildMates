'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .createTable('User',{
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        username: Sequelize.STRING,
        passwordHash: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        lastLogin: Sequelize.DATE
      }).then( queryInterface.createTable('Game', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        name: Sequelize.STRING
      }))
  },

  down: function (queryInterface) {
    return queryInterface.dropTable('User').dropTable('Game');
  }
};
