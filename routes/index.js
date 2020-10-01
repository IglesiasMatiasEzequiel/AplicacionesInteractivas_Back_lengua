/* Controllers */
const usuariosController = require('../controllers/usuarios');

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Example project did not give you access to the api web services',
	}));

	app.post('/api/backupUsuario', usuariosController.backupUsuario);
	app.post('/api/backupIngreso', usuariosController.backupIngreso);
	app.post('/api/backupEgreso', usuariosController.backupEgreso);
	app.post('/api/backupCuenta', usuariosController.backupCuenta);
	app.post('/api/backupInversion', usuariosController.backupInversion);
	app.post('/api/backupPrestamo', usuariosController.backupPrestamo);
	app.post('/api/backupPresupuesto', usuariosController.backupPresupuesto);
	app.post('/api/backupTarjeta', usuariosController.backupTarjeta);
	
};