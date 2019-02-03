'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users','name', {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('users','name',{
      type: Sequelize.STRING,
      allowNull: false,
      unique: false
    })
  }
};
