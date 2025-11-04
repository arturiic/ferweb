const express = require('express'); // FRAMEWORK
const router = express.Router(); // OBJETO DE RUTAS
const productos = require('./controllers/ProductosController');
const dashboard = require('./controllers/DashboardController')
const boletos = require('./controllers/BoletoController');
/*
PETICIONES :request/req/entrada
RESPUESTAS :response/res/salida
*/

// VISTAS
router.get('/dashboard', dashboard.dashboard);
router.get('/productos', productos.dtProductos);
router.get('/boletos', boletos.dtBoleto);
//PRODUCTOS
router.get('/form_registrar', productos.formCrearProducto);
router.get('/form_editar/:id', productos.formEditarProducto);
router.post('/create', productos.registrarProducto);
router.post('/update/:id', productos.editarProducto);
router.get('/deleteProducto/:id', productos.deleteProducto);


module.exports = router;