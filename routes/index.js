/* Controllers */
const usuariosController = require('../controllers/usuarios');

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Example project did not give you access to the api web services',
	}));

	app.post('/api/createUsuario', usuariosController.createUsuario);
	app.post('/api/backup', usuariosController.backup);
	app.post('/api/deleteByIdUsuario', usuariosController.deleteByIdUsuario);
	app.get('/api/getByIdUsuario', usuariosController.getByIdUsuario);
	
};