'use strict';
module.exports = (sequelize, DataTypes) => {
  const Prestamos = sequelize.define('Prestamos', {
    idUsuario: DataTypes.INTEGER,
    idTipo: DataTypes.INTEGER,
    idCuenta: DataTypes.INTEGER,
    emisorDesinatario: DataTypes.STRING,
    monto: DataTypes.FLOAT,
    intereses: DataTypes.FLOAT,
    cuota: DataTypes.INTEGER,
    vencimiento: DataTypes.DATE
  }, {});
  Prestamos.associate = function(models) {
    // associations can be defined here
  };
  return Prestamos;
};