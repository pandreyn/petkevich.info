'use strict';
module.exports = function(sequelize, DataTypes) {
  var Site = sequelize.define('Site', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Site;
};