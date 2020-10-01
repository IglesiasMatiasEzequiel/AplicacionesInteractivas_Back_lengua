'use strict';
module.exports = (sequelize, DataTypes) => {
  const Egresos = sequelize.define('Egresos', {
    idUsuario: DataTypes.INTEGER,
    idTipoEgreso: DataTypes.INTEGER,
    idCategoriaEgreso: DataTypes.INTEGER,
    idTarjeta: DataTypes.INTEGER,
    idMedioPago: DataTypes.INTEGER,
    idCuenta: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    monto: DataTypes.FLOAT,
    detalleEgreso: DataTypes.STRING,
    cuotas: DataTypes.INTEGER,
    nroCuota: DataTypes.INTEGER,
    proxVencimiento: DataTypes.DATE
  }, {});
  Egresos.associate = function(models) {
    // associations can be defined here
  };
  return Egresos;
};