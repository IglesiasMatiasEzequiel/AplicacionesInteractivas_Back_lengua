'use strict';
module.exports = (sequelize, DataTypes) => {
  const Participacion = sequelize.define('Participacion', {
    idUsuario: DataTypes.INTEGER,
    idJuego: DataTypes.INTEGER,
    idNivel: DataTypes.INTEGER,
    puntaje: DataTypes.INTEGER
  }, {});
  Participacion.associate = function(models) {
    Participacion.belongsTo(models.usuarios,
			{
        as: 'usuario',
        foreignKey: 'idUsuario'
			}
    );
    Participacion.belongsTo(models.Juego,
			{
        as: 'juego',
        foreignKey: 'idJuego'
			}
    );
    Participacion.belongsTo(models.Nivel,
			{
        as: 'nivel',
        foreignKey: 'idNivel'
			}
		);
  };
  return Participacion;
};