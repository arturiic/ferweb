CREATE DATABASE movietime;
USE movietime;
CREATE TABLE peliculas
(
	id INT AUTO_INCREMENT primary KEY,
    titulo VARCHAR(100) NOT NULL,
    duracionmin SMALLINT NOT NULL,
    estreno CHAR(4) NOT NULL,
    creado DATETIME NOT NULL default NOW(),
    modificado DATETIME NULL
)ENGINE = INNODB;
INSERT INTO peliculas (titulo, duracionmin, estreno) VALUES
	('Titanic',150, '2003'),
    ('Sherk', 120, '2005');
SELECT * FROM peliculas