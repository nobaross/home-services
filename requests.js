'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Requests = sequelize.define('Requests', {
    cleanerID: DataTypes.STRING,
    customers: DataTypes.STRING,
    service: DataTypes.STRING
  }, {
    //associations
  });
  return Requests;
};