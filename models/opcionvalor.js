'use strict';
module.exports = (sequelize, DataTypes) => {
  const OpcionValor = sequelize.define('OpcionValor', {
    idOpcion: DataTypes.INTEGER,
    valor: DataTypes.INTEGER
  }, {});
  OpcionValor.associate = function(models) {
    OpcionValor.belongsTo(models.Opcion,
			{
        foreignKey: 'idOpcion'
			}
		);
  };
  return OpcionValor;
};