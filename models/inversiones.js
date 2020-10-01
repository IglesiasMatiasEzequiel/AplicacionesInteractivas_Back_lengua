'use strict';
module.exports = (sequelize, DataTypes) => {
  const Inversiones = sequelize.define('Inversiones', {
    idUsuario: DataTypes.INTEGER,
    idTipo: DataTypes.INTEGER,
    idCuenta: DataTypes.INTEGER,
    fechaInicio: DataTypes.DATE,
    fechaVencimiento: DataTypes.DATE,
    monto: DataTypes.FLOAT,
    nombre: DataTypes.STRING,
    duracion: DataTypes.INTEGER
  }, {});
  Inversiones.associate = function(models) {
    // associations can be defined here
  };
  return Inversiones;
};