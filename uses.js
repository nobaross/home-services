'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Uses = sequelize.define('Uses', {
    cleaner: DataTypes.STRING,
    service: DataTypes.STRING
  }, {
  //associations
  });
  return Uses;
};