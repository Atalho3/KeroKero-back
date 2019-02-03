'use strict';
module.exports = (sequelize, DataTypes) => {
  const kweet = sequelize.define('kweet', {
    content: DataTypes.STRING,
    rk_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    media_url: DataTypes.STRING
  }, {});
  kweet.associate = function(models) {
    // associations can be defined here
  };
  return kweet;
};