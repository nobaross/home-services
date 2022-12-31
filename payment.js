'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const Payment = sequelize.define('Payment', {
    paymentID: DataTypes.STRING,
    paymentType: DataTypes.STRING,
    paymentAmount: DataTypes.DECIMAL,
    paymentDate: DataTypes.DATE
  }, {
   //associations
  });
  return Payment;
};