'use strict';
module.exports = (sequelize, DataTypes) => {
  const Palabra = sequelize.define('Palabra', {
    idNivel: DataTypes.INTEGER,
    palabra: DataTypes.TEXT,
    silabas: DataTypes.INTEGER,
    imgPath: DataTypes.TEXT
  }, {});
  Palabra.associate = function(models) {
    Palabra.belongsTo(models.Nivel,
			{
        foreignKey: 'idNivel'
			}
		);
  };
  return Palabra;
};