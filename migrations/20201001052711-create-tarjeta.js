'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tarjeta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUsuario: {
        type: Sequelize.INTEGER
      },
      idBanco: {
        type: Sequelize.INTEGER
      },
      idEntidadEmisora: {
        type: Sequelize.INTEGER
      },
      tarjeta: {
        type: Sequelize.INTEGER
      },
      vencimiento: {
        type: Sequelize.DATE
      },
      cierreResumen: {
        type: Sequelize.DATE
      },
      vencimientoResumen: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('Tarjeta');
  }
};