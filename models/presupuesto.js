'use strict';
module.exports = (sequelize, DataTypes) => {
  const Presupuesto = sequelize.define('Presupuesto', {
    idUsuario: DataTypes.INTEGER,
    idCategoriaEgreso: DataTypes.INTEGER,
    fechaInicio: DataTypes.DATE,
    monto: DataTypes.FLOAT
  }, {});
  Presupuesto.associate = function(models) {
    // associations can be defined here
  };
  return Presupuesto;
};