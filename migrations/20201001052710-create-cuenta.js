'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cuenta', {
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
      cbu: {
        type: Sequelize.STRING
      },
      alias: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      vencimiento: {
        type: Sequelize.DATE
      },
      monto: {
        type: Sequelize.FLOAT
      },
      tarjeta: {
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
    return queryInterface.dropTable('Cuenta');
  }
};