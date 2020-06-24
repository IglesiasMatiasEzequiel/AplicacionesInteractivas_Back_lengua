const Sequelize = require('sequelize');
const juego = require('../models').Juego;
const nivel = require('../models').Nivel;
const palabra = require('../models').Palabra;
const opcion = require('../models').Opcion;
const opcionValor = require('../models').OpcionValor;

module.exports = {

	list(_, res, next) {
		return juego.findAll({})
			.then(juegos => res.status(200).send(juegos))
			.catch(error => res.status(400).send(error))
	},

	async getById(req, res) {
		return juego.findOne({
			where: { id: req.query.id },
			include: [{
				model: nivel,
				as: 'niveles',
				include: [{
					model: palabra,
					as: 'palabras'
				},
				{
					model: opcion,
					as: 'opciones',
					include: [{
						model: opcionValor,
						as: 'valores'
					}]
				}]
			}]
		})
			.then(juego => res.status(200).send(juego))
			.catch(error => res.status(400).send(error))
	},
};