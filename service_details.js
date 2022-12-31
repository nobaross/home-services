'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Service_Details = sequelize.define('Service_Details', {
    serviceID: DataTypes.STRING,
    team: DataTypes.STRING,
    serviceTime: DataTypes.TIME,
    serviceDate: DataTypes.DATE,
    serviceType: DataTypes.STRING,
    size: DataTypes.INTEGER,
    residents: DataTypes.INTEGER
  }, {
//associations
  });
  return Service_Details;
};