const mysql = require('mysql');
// CADENA DE CONEXION = STRING ... "server=localhost;user=root;password=;database=movietime"
// OBJETOS DE CONEXION = OBJECT = {KEY:VALUE}
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'movietime'
});
// ACTIVAR LA CONEXION
conexion.connect((error) => {
    if (error) {
        console.error('Error en la conexion');
        return; // FIN
    }
    console.log('Conexion Exitosa');
});
// EXPORTAR EL OBJETO DE CONEXION PARA OFICIALIZAR SU EXISTENCIA
module.exports = conexion;