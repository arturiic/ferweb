### CRUD Node JS + Express + MySQL
Procedimiento de Instalacion

*Paso1*
Clonar el repositorio
```
git clone https://github.com/arturiic/ferweb.git
```
*Paso2*
Abrir el proyecto con VSCode y ejecutar el comando
```
npm install
```
*Paso3*
Restaurar la base de datos en la tabla:
``` sql
CREATE DATABASE movietime;
USE movietime;

CREATE TABLE peliculas
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  duracionmin SMALLINT NOT NULL,
  estreno CHAR(4) NOT NULL,
  creado DATETIME NOT NULL DEFAULT NOW(),
  modificado DATETIME NULL
)ENGINE = INNOBD;

INSERT INTO peliculas (titulo, duracionmin, estreno) VALUES
('Titanic', 150, '2003'),
('Sherk', 120, '2005');

 ```
*Paso4*
Ejecutar el proyecto
```
nodemon app
```