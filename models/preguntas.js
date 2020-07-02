'use strict';
module.exports = (sequelize, DataTypes) => {
  const Preguntas = sequelize.define('Preguntas', {
    idNivel: DataTypes.INTEGER,
    idPregunta: DataTypes.INTEGER,
    respuesta: DataTypes.INTEGER,
    pregunta: DataTypes.STRING,
    opcion1: DataTypes.STRING,
    opcion2: DataTypes.STRING,
    opcion3: DataTypes.STRING
  }, {});
  Preguntas.associate = function(models) {
    Preguntas.belongsTo(models.Nivel,
			{
        foreignKey: 'idNivel'
			}
		);
  };
  return Preguntas;
};