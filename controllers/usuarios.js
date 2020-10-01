const usuarios = require("../models").Usuarios;
const ingresos = require("../models").Ingresos;
const egresos = require("../models").Egresos;
const cuentas = require("../models").Cuenta;
const tarjetas = require("../models").Tarjeta;
const inversiones = require("../models").Inversiones;
const prestamos = require("../models").Prestamos;
const presupuestos = require("../models").Presupuesto;

module.exports = {
  backup(req, res) {
    var promises = [];

    req.body.ingresos.map((item) => {
      promises.push(
        ingresos.create({
          idUsuario: item.idUsuario,
          idTipoIngreso: item.idTipoIngreso,
          idCategoriaIngreso: item.idCategoriaIngreso,
          idDestinoIngreso: item.idDestinoIngreso,
          idCuenta: item.idCuenta,
          fecha: item.fecha,
          idCuenta: item.descripcion,
          monto: item.monto,
          descripcion: item.descripcion,
        })
      );
    });

    req.body.egresos.map((item) => {
      promises.push(
        egresos.create({
          idUsuario: item.idUsuario,
          idTipoEgreso: item.idTipoEgreso,
          idCategoriaEgreso: item.idCategoriaEgreso,
          idMedioPago: item.idMedioPago,
          idTarjeta: item.idTarjeta,
          idCuenta: item.idCuenta,
          fecha: item.fecha,
          monto: item.monto,
          detalleEgreso: item.detalleEgreso,
          cuotas: item.cuotas,
          nroCuota: item.nroCuota,
          proxVencimiento: item.proxVencimiento,
        })
      );
    });

    req.body.cuentas.map((item) => {
      promises.push(
        cuentas.create({
          idUsuario: item.idUsuario,
          idBanco: item.idBanco,
          idEntidadEmisora: item.idEntidadEmisora,
          cbu: item.cbu,
          alias: item.alias,
          descripcion: item.descripcion,
          vencimiento: item.vencimiento,
          monto: item.monto,
          tarjeta: item.tarjeta,
        })
      );
    });

    req.body.tarjetas.map((item) => {
      promises.push(
        tarjetas.create({
          idUsuario: item.idUsuario,
          idBanco: item.idBanco,
          idEntidadEmisora: item.idEntidadEmisora,
          tarjeta: item.tarjeta,
          vencimiento: item.vencimiento,
          cierreResumen: item.cierreResumen,
          vencimientoResumen: item.vencimientoResumen
        })
      );
    });

    req.body.inversiones.map((item) => {
      promises.push(
        inversiones.create({
          idUsuario: item.idUsuario,
          idTipo: item.idTipo,
          idCuenta: item.idCuenta,
          fechaInicio: item.fechaInicio,
          fechaVencimiento: item.fechaVencimiento,
          monto: item.monto,
          nombre: item.nombre,
          duracion: item.duracion
        })
      );
    });

    req.body.prestamos.map((item) => {
      promises.push(
        prestamos.create({
          idUsuario: item.idUsuario,
          idTipo: item.idTipo,
          idCuenta: item.idCuenta,
          emisorDesinatario: item.emisorDesinatario,
          intereses: item.intereses,
          monto: item.monto,
          cuota: item.cuota,
          vencimiento: item.vencimiento,
        })
      );
    });

    req.body.presupuestos.map((item) => {
      promises.push(
        presupuestos.create({
          idUsuario: item.idUsuario,
          idCategoriaEgreso: item.idCategoriaEgreso,
          fechaInicio: item.fechaInicio,
          monto: item.monto,
        })
      );
    });

    return Promise.all(promises)
      .then((items) => res.status(200).json({ status: 200 }))
      .catch((error) => res.status(400).json({ status: 400, error: error }));
  },

  createUsuario(req, res) {
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
      presupuestos.findAll({ where: { idUsuario: req.body.idUsuario } }),
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
