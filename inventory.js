'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Inventory = sequelize.define('Inventory', {
    inventoryID: DataTypes.STRING,
    inflow: DataTypes.INTEGER,
    outflow: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    cleaners: DataTypes.STRING
  }, {
    //associations
  });
  return Inventory;
};