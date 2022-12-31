'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Service_Details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serviceID: {
        type: Sequelize.STRING
      },
      team: {
        type: Sequelize.STRING
      },
      serviceTime: {
        type: Sequelize.TIME
      },
      serviceDate: {
        type: Sequelize.DATE
      },
      serviceType: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.INTEGER
      },
      residents: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
   down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Service_Details');
  }
};