'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Prestamos', {
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
      emisorDesinatario: {
        type: Sequelize.STRING
      },
      monto: {
        type: Sequelize.FLOAT
      },
      intereses: {
        type: Sequelize.FLOAT
      },
      cuota: {
        type: Sequelize.INTEGER
      },
      vencimiento: {
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
    return queryInterface.dropTable('Prestamos');
  }
};