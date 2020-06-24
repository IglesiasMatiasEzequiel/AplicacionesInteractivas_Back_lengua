const Sequelize = require('sequelize');
const users = require('../models').usuarios;
const auth = require('../services/authServices');
const bcrypt = require("bcrypt");
const BCRYPT_ROUNDS = require('../config/config.js').BCRYPT_ROUNDS


module.exports = {
	async login(req, res) {
		let user = {
			username: req.body.username,
			password: req.body.password,
		}
		try {
			let response = await auth.loginUser(user);
			return res.status(200).json({ idUsuario: response.idUsuario, token: response.token, message: "Success login" })
		}
		catch (e) {
			return res.status(400).json({ status: 400, message: "Invalid username or password" })
		}
	},

	register(req, res) {
		return users
			.findOrCreate({
				where: {
					username: req.body.username,
				},
				defaults: {
					username: req.body.username,
					password: bcrypt.hashSync(req.body.password, BCRYPT_ROUNDS),
					status: req.body.status
				},
			})
			.then(async user => {
				let response = await auth.registerUser(user);
				return res.status(200).json({ idUsuario: response.idUsuario, token: response.token, message: "Succesfully Created User" })
			})
			.catch(error => res.status(400).json({error: error, message: "Register error"}))
	},

	list(_, res, next) {
		return users.findAll({})
			.then(usuarios => res.status(200).send(usuarios))
			.catch(error => res.status(400).send(error))
	},

	findUserByUsername(req, res, next) {
		return users.findOne({ where: { username: req.body.username } })
			.then(usuarios => res.status(200).send(usuarios))
			.catch(error => res.status(400).send(error))
	},
};