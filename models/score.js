'use strict';
module.exports = function (sequelize, DataTypes) {
  var Score = sequelize.define('Score', {
    title: DataTypes.STRING,
    music: DataTypes.TEXT,
    random: DataTypes.BOOLEAN
    
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        }
      }
    });
  return Score;
};