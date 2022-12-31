'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Cleaner = sequelize.define('Cleaner', {
    cleanerID: DataTypes.STRING,
    cleanerFirstname: DataTypes.STRING,
    cleanerLastname: DataTypes.STRING,
    cleanerAddress: DataTypes.STRING,
    cleanerPhone: DataTypes.STRING,
    cleanerEmail: DataTypes.STRING
  }, {
//associtions
  });
  return Cleaner;
};