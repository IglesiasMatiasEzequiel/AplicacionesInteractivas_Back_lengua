'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Preguntas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idNivel: {
        type: Sequelize.INTEGER
      },
      idPregunta: {
        type: Sequelize.INTEGER
      },
      respuesta: {
        type: Sequelize.INTEGER
      },
      pregunta: {
        type: Sequelize.STRING
      },
      opcion1: {
        type: Sequelize.STRING
      },
      opcion2: {
        type: Sequelize.STRING
      },
      opcion3: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Preguntas');
  }
};