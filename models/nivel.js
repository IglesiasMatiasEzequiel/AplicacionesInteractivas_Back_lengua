'use strict';
module.exports = (sequelize, DataTypes) => {
  const Nivel = sequelize.define('Nivel', {
    idJuego: DataTypes.INTEGER,
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    statement: DataTypes.STRING,
    levelScore: DataTypes.INTEGER
  }, {});
  Nivel.associate = function (models) {
    Nivel.hasMany(models.Palabra,
      {
        as: 'palabras',
        foreignKey: 'idNivel'
      }
    );
    Nivel.hasMany(models.Opcion,
      {
        as: 'opciones',
        foreignKey: 'idNivel'
      }
    );
    Nivel.hasMany(models.Preguntas,
      {
        as: 'preguntas',
        foreignKey: 'idNivel'
      }
    );

    Nivel.belongsTo(models.Juego, { foreignKey: 'idJuego' });
  };
  return Nivel;
};