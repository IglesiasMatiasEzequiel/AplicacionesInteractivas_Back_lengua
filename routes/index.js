/* Controllers */
const usuariosController = require('../controllers/usuarios');
const juegosController = require('../controllers/juegos');
const participacionController = require('../controllers/participacion');
const auth = require ('../auth/authToken.js')

module.exports = (app) => {
	app.get('/api', (req, res) => res.status(200).send({
		message: 'Example project did not give you access to the api web services',
	}));

	// User services
	app.post('/api/auth/login', usuariosController.login)
	app.post('/api/auth/register', usuariosController.register);	

	app.get('/api/usuarios/list', auth, usuariosController.list);
	app.get('/api/usuarios/find', auth, usuariosController.findUserByUsername);

	// Juegos services
	app.get('/api/juegos/list', auth, juegosController.list);
	app.get('/api/juegos/getById', auth, juegosController.getById);

	// Participacion services
	app.post('/api/participacion/create', auth, participacionController.createParticipacion);
	app.get('/api/participacion/listRanking', auth, participacionController.listRanking);	
	app.get('/api/participacion/listRankingByJuego', auth, participacionController.listRankingByJuego);	
};