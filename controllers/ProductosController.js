const conexion = require('../database/db');

exports.dtProductos = (req, res) => {
    conexion.query('SELECT * FROM productos', (error, results) => {
        if (error) {
            console.error("No se pueden acceder a los datos");
            res.send('ERROR AL CARGAR DATOS');
        } else {
            res.render("dashboard/template", { 
                title: "Productos", 
                content: "../productos/index",
                productos: results
            });
        }
    });
};

exports.formCrearProducto = (req, res) => {
    res.render("dashboard/template", {
        title: "Agregar Producto",
        content: "../productos/form_registrar"
    });
};

exports.formEditarProducto = (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM productos WHERE idproducto = ?';
    conexion.query(sql, [id], (error, results) => {
        if (error) {
            console.error('Error al obtener el producto:', error);
            res.send('Error al cargar el producto');
        } else {
            res.render("dashboard/template", {
                title: "Editar Producto",
                content: "../productos/form_editar",
                producto: results[0]
            });
        }
    });
};

exports.registrarProducto = (req, res) => {
    const { nombre, descripcion, precio_compra, precio_venta, stock, stock_minimo, idproveedor, estado } = req.body;
    const sql = `INSERT INTO productos 
        (nombre, descripcion, precio_compra, precio_venta, stock, stock_minimo, idproveedor, estado) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    conexion.query(sql, [nombre, descripcion, precio_compra, precio_venta, stock, stock_minimo, idproveedor, estado], (error, results) => {
        if (error) {
            console.error('Error al insertar:', error);
            res.send('Error al guardar');
        } else {
            res.redirect('/productos');
        }
    });
};

exports.editarProducto = (req, res) => {
    const id = req.params.id;
    const { nombre, descripcion, precio_compra, precio_venta, stock, stock_minimo, idproveedor, estado } = req.body;
    const sql = 'UPDATE productos SET nombre = ?, descripcion = ?, precio_compra = ?, precio_venta = ?, stock = ?, stock_minimo = ?, idproveedor = ?, estado = ? WHERE idproducto = ?';
    conexion.query(sql, [nombre, descripcion, precio_compra, precio_venta, stock, stock_minimo, idproveedor, estado, id], (error, results) => {
        if (error) {
            console.error('Error al actualizar:', error);
            res.status(500).send('Error al actualizar');
        } else {
            res.status(200).send('Actualizado');
        }
    });
};

exports.deleteProducto = (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM productos WHERE idproducto = ?';
    conexion.query(sql, [id], (error, results) => {
        if (error) {
            console.error('Error al eliminar:', error);
            res.send('Error al eliminar');
        } else {
            res.redirect('/productos');
        }
    });
};