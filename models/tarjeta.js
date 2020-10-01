'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tarjeta = sequelize.define('Tarjeta', {
    idUsuario: DataTypes.INTEGER,
    idBanco: DataTypes.INTEGER,
    idEntidadEmisora: DataTypes.INTEGER,
    tarjeta: DataTypes.INTEGER,
    vencimiento: DataTypes.DATE,
    cierreResumen: DataTypes.DATE,
    vencimientoResumen: DataTypes.DATE
  }, {});
  Tarjeta.associate = function(models) {
    // associations can be defined here
  };
  return Tarjeta;
};