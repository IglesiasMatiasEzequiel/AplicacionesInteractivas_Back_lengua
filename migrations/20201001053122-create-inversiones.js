'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Inversiones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUsuario: {
        type: Sequelize.INTEGER
      },
      idTipo: {
        type: Sequelize.INTEGER
      },
      idCuenta: {
        type: Sequelize.INTEGER
      },
      fechaInicio: {
        type: Sequelize.DATE
      },
      fechaVencimiento: {
        type: Sequelize.DATE
      },
      monto: {
        type: Sequelize.FLOAT
      },
      nombre: {
        type: Sequelize.STRING
      },
      duracion: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Inversiones');
  }
};