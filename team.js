'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Team = sequelize.define('Team', {
    teamID: DataTypes.STRING,
    teamSize: DataTypes.INTEGER,
    floor: DataTypes.STRING
  }, {
    //associations
  });
  return Team;
};