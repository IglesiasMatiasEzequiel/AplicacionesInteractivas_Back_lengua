'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingresos = sequelize.define('Ingresos', {
    idUsuario: DataTypes.INTEGER,
    idTipoIngreso: DataTypes.INTEGER,
    idCategoriaIngreso: DataTypes.INTEGER,
    idDestinoIngreso: DataTypes.INTEGER,
    idCuenta: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    monto: DataTypes.FLOAT,
    descripcion: DataTypes.STRING
  }, {});
  Ingresos.associate = function(models) {
    // associations can be defined here
  };
  return Ingresos;
};