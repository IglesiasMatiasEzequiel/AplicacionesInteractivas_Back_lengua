const usuarios = require('../models').Usuarios;
const ingresos = require('../models').Ingresos;
const egresos = require('../models').Egresos;
const cuentas = require('../models').Cuenta;
const tarjetas = require('../models').Tarjeta;
const inversiones = require('../models').Inversiones;
const prestamos = require('../models').Prestamos;
const presupuestos = require('../models').Presupuesto;

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
        return res.status(200).json({ status: 200, items: items });
      })
      .catch((error) => res.status(400).json({ status: 400, error: error }));
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
        return res.status(200).json({ status: 200, items: items });
      })
      .catch((error) => res.status(400).json({ status: 400, error: error }));
  },

  backupEgreso(req, res) {
    return egresos
      .create({
        idUsuario: req.body.idUsuario,
        idTipoEgreso: req.body.idTipoEgreso,
        idCategoriaEgreso: req.body.idCategoriaEgreso,
        idMedioPago: req.body.idMedioPago,
        idTarjeta: req.body.idTarjeta,
        idCuenta: req.body.idCuenta,
        fecha: req.body.fecha,
        monto: req.body.monto,
        detalleEgreso: req.body.detalleEgreso,
        cuotas: req.body.cuotas,
        nroCuota: req.body.nroCuota,
        proxVencimiento: req.body.proxVencimiento,
      })
      .then((items) => {
        return res.status(200).json({ status: 200, items: items });
      })
      .catch((error) => res.status(400).json({ status: 400, error: error }));
  },

  backupCuenta(req, res) {
    return cuentas
      .create({
        idUsuario: req.body.idUsuario,
        idBanco: req.body.idBanco,
        idEntidadEmisora: req.body.idEntidadEmisora,
        cbu: req.body.cbu,
        alias: req.body.alias,
        descripcion: req.body.descripcion,
        vencimiento: req.body.vencimiento,
        monto: req.body.monto,
        tarjeta: req.body.tarjeta,
      })
      .then((items) => {
        return res.status(200).json({ status: 200, items: items });
      })
      .catch((error) => res.status(400).json({ status: 400, error: error }));
  },

  backupTarjeta(req, res) {
    return tarjetas
      .create({
        idUsuario: req.body.idUsuario,
        idBanco: req.body.idBanco,
        idEntidadEmisora: req.body.idEntidadEmisora,
        tarjeta: req.body.tarjeta,
        vencimiento: req.body.vencimiento,
        cierreResumen: req.body.cierreResumen,
        vencimientoResumen: req.body.vencimientoResumen,
      })
      .then((items) => {
        return res.status(200).json({ status: 200, items: items });
      })
      .catch((error) => res.status(400).json({ status: 400, error: error }));
  },

  backupInversion(req, res) {
    return inversiones
      .create({
        idUsuario: req.body.idUsuario,
        idTipo: req.body.idTipo,
        idCuenta: req.body.idCuenta,
        fechaInicio: req.body.fechaInicio,
        fechaVencimiento: req.body.fechaVencimiento,
        monto: req.body.monto,
        nombre: req.body.nombre,
        duracion: req.body.duracion,
      })
      .then((items) => {
        return res.status(200).json({ status: 200, items: items });
      })
      .catch((error) => res.status(400).json({ status: 400, error: error }));
  },

  backupPrestamo(req, res) {
    return prestamos
      .create({
        idUsuario: req.body.idUsuario,
        idTipo: req.body.idTipo,
        idCuenta: req.body.idCuenta,
        emisorDesinatario: req.body.emisorDesinatario,
        intereses: req.body.intereses,
        monto: req.body.monto,
        cuota: req.body.cuota,
        vencimiento: req.body.vencimiento,
      })
      .then((items) => {
        return res.status(200).json({ status: 200, items: items });
      })
      .catch((error) => res.status(400).json({ status: 400, error: error }));
  },

  backupPresupuesto(req, res) {
    return presupuestos
      .create({
        idUsuario: req.body.idUsuario,
        idCategoriaEgreso: req.body.idCategoriaEgreso,
        fechaInicio: req.body.fechaInicio,
        monto: req.body.monto,
      })
      .then((items) => {
        return res.status(200).json({ status: 200, items: items });
      })
      .catch((error) => res.status(400).json({ status: 400, error: error }));
  },

  deleteByIdUsuario(req, res) {
    return Promise.all([
      ingresos.destroy({ where: { idUsuario: req.body.idUsuario } }),
      egresos.destroy({ where: { idUsuario: req.body.idUsuario } }),
      cuentas.destroy({ where: { idUsuario: req.body.idUsuario } }),
      tarjetas.destroy({ where: { idUsuario: req.body.idUsuario } }),
      inversiones.destroy({ where: { idUsuario: req.body.idUsuario } }),
      prestamos.destroy({ where: { idUsuario: req.body.idUsuario } }),
      presupuestos.destroy({ where: { idUsuario: req.body.idUsuario } }),
    ])
      .then((items) => {
        return res.status(200).json({ status: 200, items: items });
      })
      .catch((error) => res.status(400).json({ status: 400, error: error }));
  },

  getByIdUsuario(req, res) {
    return Promise.all([
      ingresos.findAll({ where: { idUsuario: req.body.idUsuario } }),
      egresos.findAll({ where: { idUsuario: req.body.idUsuario } }),
      cuentas.findAll({ where: { idUsuario: req.body.idUsuario } }),
      tarjetas.findAll({ where: { idUsuario: req.body.idUsuario } }),
      inversiones.findAll({ where: { idUsuario: req.body.idUsuario } }),
      prestamos.findAll({ where: { idUsuario: req.body.idUsuario } }),
      presupuestos.findAll({ where: { idUsuario: req.body.idUsuario } })
    ])
      .then((items) => {
        return res.status(200).json({ 
			status: 200, 
			ingresos: items[0],
			egresos: items[1],
			cuentas: items[2],
			tarjetas: items[3],
			inversiones: items[4],
			prestamos: items[5],
			presupuestos: items[6],
		});
      })
      .catch((error) => res.status(400).json({ status: 400, error: error }));
  },
};