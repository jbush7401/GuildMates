/**
 * Created by jbush_000 on 5/31/2016.
 */
"use strict";

module.exports = function(Sequelize, DataTypes) {
  return Sequelize.define("User", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    username: DataTypes.STRING,
    passwordHash: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    lastLogin: DataTypes.DATE
  }, {
    classMethods: {}
  });
};