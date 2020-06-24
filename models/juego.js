'use strict';
module.exports = (sequelize, DataTypes) => {
  const Juego = sequelize.define('Juego', {
    name: DataTypes.STRING
  }, {});
  Juego.associate = function(models) {
    Juego.hasMany(models.Nivel,
			{
        as: 'niveles',
        foreignKey: 'idJuego'
			}
    );
  };
  return Juego;
};