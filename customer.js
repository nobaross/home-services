'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Customer = sequelize.define('Customer', {
    customerID: DataTypes.STRING,
    customerFirstname: DataTypes.STRING,
    customerLastname: DataTypes.STRING,
    customerAddress: DataTypes.STRING,
    customerPhone: DataTypes.STRING,
    customerEmail: DataTypes.STRING
  }, {
    //associtions
  });
  return Customer;
};