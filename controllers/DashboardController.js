const conexion = require('../database/db');

exports.dashboard = (req, res) => {
    res.render("dashboard/template", { 
        title: "Dashboard", 
        content: "index"
    });
};
