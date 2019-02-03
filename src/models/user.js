'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    biography: DataTypes.STRING,
    email: DataTypes.STRING,
    password_digest: DataTypes.STRING,
    last_token: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};