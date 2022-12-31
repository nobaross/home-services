'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Schedule = sequelize.define('Schedule', {
    cleanerID: DataTypes.STRING,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME,
    duration: DataTypes.STRING,
    date: DataTypes.DATE,
    customer: DataTypes.STRING
  }, {
    //associtions
  });
  return Schedule;
};