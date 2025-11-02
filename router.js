const express = require('express'); // FRAMEWORK
const router = express.Router(); // OBJETO DE RUTAS
const conexion = require('./database/db'); // CONEXION
/*
PETICIONES :request/req/entrada
RESPUESTAS :response/res/salida
*/
router.get('/', (req, res) => {
    // res.send('SENATI - INGENIERIA DE SOFTWARE CON IA');
    // res.render("index",{pelicula: "Madagascar", cancion: "No hay cielo", lista:["Terminator", "Comando", "Avatar"]});
    
    // CUALQUIER CONSULTA O ... DA UN RESULTADO/ERROR
    conexion.query('SELECT * FROM peliculas', (error, results) => {
        if (error) {
            console.error("No se puden acceder a los datos");
        } else {
            // res.send(results);
            res.render("index", { peliculas: results });
        }
    });
});
router.get('/desarrollador', (req, res) => {
    res.send('ARTURI EMMANUEL IZQUIERDO CANTOS');
});
router.get('/carrera', (req, res) => {
    // res.send('INGENIERIA DE SOFTWARE CON IA');
    res.render("index");
});
router.get('/edit', (req, res) => {
    res.render("edit"); // NOMBRE DEL ARCHIVO FISICO QUE EXISTE EN VIEWS
});
router.get('/create', (req, res) => {
    res.render("create"); // NOMBRE DEL ARCHIVO FISICO QUE EXISTE EN VIEWS
});

module.exports = router;