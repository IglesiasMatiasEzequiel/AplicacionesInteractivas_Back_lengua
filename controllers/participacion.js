const Sequelize = require('sequelize');
const participacion = require('../models').Participacion;
const usuario = require('../models').usuarios;

module.exports = {

	async createParticipacion(req, res) {
		return participacion
			.create({
				idUsuario: req.body.idUsuario,
				idJuego: req.body.idJuego,
				idNivel: req.body.idNivel,
				puntaje: req.body.puntaje
			}).then(participacion => res.status(200).send(participacion))
			.catch(error => res.status(400).send(error));
	},

	async listRanking(req, res) {
		return participacion.findAll({
			include: [{
				model: usuario,
				as: 'usuario'
			}],
			group: ['idUsuario'],
			attributes: [[Sequelize.fn('SUM', Sequelize.col('puntaje')), 'puntajeTotal']],
			order: [[Sequelize.fn('SUM', Sequelize.col('puntaje')), 'DESC']]
		})
		.then(participacion => res.status(200).send(participacion))
		.catch(error => res.status(400).send(error))
	},

	async listRankingByJuego(req, res) {
		return participacion.findAll({
			where: { idJuego: req.query.id },
			include: [{
				model: usuario,
				as: 'usuario'
			}],
			group: ['idUsuario', 'idJuego'],
			attributes: [[Sequelize.fn('SUM', Sequelize.col('puntaje')), 'puntajeTotal']],
			order: [[Sequelize.fn('SUM', Sequelize.col('puntaje')), 'DESC']]
		})
		.then(participacion => res.status(200).send(participacion))
		.catch(error => res.status(400).send(error))
	}
};