'use strict';
module.exports = (sequelize, DataTypes) => {
  const Opcion = sequelize.define('Opcion', {
    idNivel: DataTypes.INTEGER,
    opcion: DataTypes.STRING
  }, {});
  Opcion.associate = function(models) {
    Opcion.hasMany(models.OpcionValor,
      {
        as: 'valores',
        foreignKey: 'idOpcion'
      }
    );
    Opcion.belongsTo(models.Nivel,
			{
        foreignKey: 'idNivel'
			}
		);
  };
  return Opcion;
};