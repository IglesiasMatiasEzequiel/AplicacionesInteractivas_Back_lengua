'use strict';
module.exports = (sequelize, DataTypes) => {
  const Palabra = sequelize.define('Palabra', {
    idNivel: DataTypes.INTEGER,
    palabra: DataTypes.STRING,
    silabas: DataTypes.INTEGER,
    imgPath: DataTypes.STRING
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