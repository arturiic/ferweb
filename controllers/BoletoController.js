const conexion = require('../database/db');

exports.dtBoleto = (req, res) => {
    res.render("dashboard/template", {
        title: "Compra de Boletos",
        content: "../boletos/index"
    });
};