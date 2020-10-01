'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Egresos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUsuario: {
        type: Sequelize.INTEGER
      },
      idTipoEgreso: {
        type: Sequelize.INTEGER
      },
      idCategoriaEgreso: {
        type: Sequelize.INTEGER
      },
      idTarjeta: {
        type: Sequelize.INTEGER
      },
      idMedioPago: {
        type: Sequelize.INTEGER
      },
      idCuenta: {
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.DATE
      },
      monto: {
        type: Sequelize.FLOAT
      },
      detalleEgreso: {
        type: Sequelize.STRING
      },
      cuotas: {
        type: Sequelize.INTEGER
      },
      nroCuota: {
        type: Sequelize.INTEGER
      },
      proxVencimiento: {
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
    return queryInterface.dropTable('Egresos');
  }
};