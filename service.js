'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Service = sequelize.define('Service', {
    serviceID: DataTypes.STRING,
    customer: DataTypes.STRING,
    cleaner: DataTypes.STRING,
    serviceType: DataTypes.STRING
  }, {
//associations
  });
  return Service;
};