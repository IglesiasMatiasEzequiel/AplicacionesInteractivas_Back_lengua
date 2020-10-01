/* Controllers */
const usuariosController = require('../controllers/usuarios');

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Example project did not give you access to the api web services',
	}));

	// User services
	// app.post('/api/auth/login', usuariosController.login)
	// app.post('/api/auth/register', usuariosController.register);	

	app.post('/api/usuarios/backupUsuario', usuariosController.backupUsuario);
	app.post('/api/usuarios/backupIngreso', usuariosController.backupIngreso);
	app.get('/api/usuarios/list', usuariosController.list);
	// app.get('/api/usuarios/find', auth, usuariosController.findUserByUsername);
};