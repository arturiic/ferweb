const express = require('express')
const app = express()

// MOTOR DE PLANTILLAS
app.set('view engine', 'ejs')

app.use(express.static('public'));

// MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ENRUTADOR
// EL CARACTER  / REPRESENTA LA RAIZ DE TU WEB https://ferweb.com/
app.use('/', require('./router'))
// CREAR SERVIDOR
app.listen(5000, () => {
    console.log('Servidor Ejecutandose en http://localhost:5000');
})