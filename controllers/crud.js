const conexion = require('../database/db');

exports.dashboard = (req, res) => {
    res.render("dashboard/template", { 
        title: "Dashboard", 
        content: "index" // solo el nombre del archivo
    });
};

// Listar películas
exports.listarPeliculas = (req, res) => {
    conexion.query('SELECT * FROM peliculas', (error, results) => {
        if (error) {
            console.error("No se pueden acceder a los datos");
            res.send('Error al cargar las películas');
        } else {
            res.render("dashboard/template", { 
                title: "Películas", 
                content: "../peliculas",
                peliculas: results
            });
        }
    });
};

exports.formCrearPelicula = (req, res) => {
    res.render("dashboard/template", {
        title: "Registrar Película",
        content: "../create" // ruta relativa desde dashboard/template.ejs
    });
};

exports.formEditarPelicula = (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM peliculas WHERE id = ?';
    conexion.query(sql, [id], (error, results) => {
        if (error) {
            console.error('Error al obtener la película:', error);
            res.send('Error al cargar la película');
        } else {
            res.render("dashboard/template", {
                title: "Editar Película",
                content: "../edit", // ruta relativa desde dashboard/template.ejs
                pelicula: results[0] // pasa los datos de la película
            });
        }
    });
};