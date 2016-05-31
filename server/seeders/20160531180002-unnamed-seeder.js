'use strict';
var uuid  = require("node-uuid");
var UserService = require("../services/userService");

module.exports = {
  up: function (queryInterface) {
    return queryInterface.bulkInsert('User', [{
        id: uuid.v4(),
        username: 'Blazemore',
        passwordHash: UserService.getHashedPassword("password"),
        createdAt: new Date()
      }], {});

  },

  down: function (queryInterface, Sequelize) {

      return queryInterface.bulkDelete('User', null, {});
  }
};
