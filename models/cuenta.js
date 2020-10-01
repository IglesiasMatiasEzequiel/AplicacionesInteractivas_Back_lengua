'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cuenta = sequelize.define('Cuenta', {
    idUsuario: DataTypes.INTEGER,
    idBanco: DataTypes.INTEGER,
    idEntidadEmisora: DataTypes.INTEGER,
    cbu: DataTypes.STRING,
    alias: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    vencimiento: DataTypes.DATE,
    monto: DataTypes.FLOAT,
    tarjeta: DataTypes.INTEGER
  }, {});
  Cuenta.associate = function(models) {
    // associations can be defined here
  };
  return Cuenta;
};