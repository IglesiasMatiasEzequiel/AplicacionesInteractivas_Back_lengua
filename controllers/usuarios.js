const usuarios = require('../models').Usuarios;
const ingresos = require('../models').Ingresos;

module.exports = {
  backupUsuario(req, res) {
    return usuarios
      .create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        password: req.body.password,
      })
      .then((items) => {
        return res
          .status(200)
          .json({ status: 200, items: items });
      })
      .catch((error) =>
        res.status(400).json({ status: 400, error: error })
      );
  },

  backupIngreso(req, res) {
    return ingresos
      .create({
        idUsuario: req.body.idUsuario,
        idTipoIngreso: req.body.idTipoIngreso,
        idCategoriaIngreso: req.body.idCategoriaIngreso,
        idDestinoIngreso: req.body.idDestinoIngreso,
        idCuenta: req.body.idCuenta,
        fecha: req.body.fecha,
        idCuenta: req.body.descripcion,
        monto: req.body.monto,
        descripcion: req.body.descripcion,
      })
      .then((items) => {
        return res
          .status(200)
          .json({ status: 200, items: items });
      })
      .catch((error) =>
	  res.status(400).json({ status: 400, error: error })
      );
  },

  list(_, res, next) {
    return usuario
      .findAll({})
      .then((usuarios) => res.status(200).send(usuarios))
      .catch((error) => res.status(400).send(error));
  },

  // async getById(req, res) {
  // 	return juego.findOne({
  // 		where: { id: req.query.id },
  // 		include: [{
  // 			model: nivel,
  // 			as: 'niveles',
  // 			include: [{
  // 				model: palabra,
  // 				as: 'palabras'
  // 			},
  // 			{
  // 				model: preguntas,
  // 				as: 'preguntas',
  // 		 	},
  // 			{
  // 				model: opcion,
  // 				as: 'opciones',
  // 				include: [{
  // 					model: opcionValor,
  // 					as: 'valores'
  // 				}]
  // 			}],
  // 		}]
  // 	})
  // 		.then(juego => res.status(200).send(juego))
  // 		.catch(error => res.status(400).send(error))
  // },
};