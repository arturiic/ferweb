const express = require('express'); // FRAMEWORK
const router = express.Router(); // OBJETO DE RUTAS
const conexion = require('./database/db'); // CONEXION
/*
PETICIONES :request/req/entrada
RESPUESTAS :response/res/salida
*/
router.get('/', (req, res) => {
     res.render("index");
});

router.get('/mant_peliculas', (req, res) => {
    // res.send('SENATI - INGENIERIA DE SOFTWARE CON IA');
    // res.render("index",{pelicula: "Madagascar", cancion: "No hay cielo", lista:["Terminator", "Comando", "Avatar"]});
    
    // CUALQUIER CONSULTA O ... DA UN RESULTADO/ERROR
    conexion.query('SELECT * FROM peliculas', (error, results) => {
        if (error) {
            console.error("No se puden acceder a los datos");
        } else {
            // res.send(results);
            res.render("peliculas", { peliculas: results });
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

router.post('/create', (req, res) => {
    const { titulo, autor, duracion, fecha_estreno, puntuacion } = req.body;
    const sql = 'INSERT INTO peliculas (titulo, autor, duracionmin, estreno, puntuacion) VALUES (?, ?, ?, ?, ?)';
    conexion.query(sql, [titulo, autor, duracion, fecha_estreno, puntuacion], (error, results) => {
        if (error) {
            console.error('Error al insertar:', error);
            res.send('Error al guardar');
        } else {
            res.redirect('/'); // Redirige al inicio después de guardar
        }
    });
});

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM peliculas WHERE id = ?';
    conexion.query(sql, [id], (error, results) => {
        if (error) {
            console.error('Error al eliminar:', error);
            res.send('Error al eliminar');
        } else {
            res.redirect('/mant_peliculas');
        }
    });
});

router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM peliculas WHERE id = ?';
    conexion.query(sql, [id], (error, results) => {
        if (error) {
            console.error('Error al obtener la película:', error);
            res.send('Error al cargar la película');
        } else {
            res.render('edit', { pelicula: results[0] });
        }
    });
});

router.post('/update/:id', (req, res) => {
    const id = req.params.id;
    const { titulo, autor, duracion, fecha_estreno, puntuacion } = req.body;
    const sql = 'UPDATE peliculas SET titulo = ?, autor = ?, duracionmin = ?, estreno = ?, puntuacion = ?, modificado = NOW() WHERE id = ?';
    conexion.query(sql, [titulo, autor, duracion, fecha_estreno, puntuacion, id], (error, results) => {
        if (error) {
            console.error('Error al actualizar:', error);
            res.send('Error al actualizar');
        } else {
            res.redirect('/mant_peliculas');
        }
    });
});

module.exports = router;