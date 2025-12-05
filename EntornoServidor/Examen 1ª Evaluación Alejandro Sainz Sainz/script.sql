-- Creación de la base de datos
DROP DATABASE IF EXISTS examen_spring_dwes;
CREATE DATABASE IF NOT EXISTS examen_spring_dwes
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;
USE examen_spring_dwes;

-- Yo siempre creo un usuario, me es más fácil a la hora de añadir la configuración a aplicatión properties
drop user if exists 'zidane'@'localhost';
create user if not exists 'zidane'@'localhost' identified by '1234';
grant all privileges on examen_spring_dwes.* to 'zidane'@'localhost';
FLUSH PRIVILEGES;

DROP TABLE IF EXISTS partidos;
DROP TABLE IF EXISTS jugadores;
DROP TABLE IF EXISTS arbitros;
DROP TABLE IF EXISTS equipos;

-- Tabla EQUIPOS
CREATE TABLE IF NOT EXISTS equipos (
id BIGINT auto_increment NOT NULL, -- UUID (String generado con UUID.randomUUID().toString())
nombre_equipo VARCHAR(100) NOT NULL,
sede VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
) ENGINE=InnoDB;
-- Tabla JUGADORES

CREATE TABLE IF NOT EXISTS jugadores (
id CHAR(36) NOT NULL, -- UUID
dorsal INT NOT NULL,
nombre VARCHAR(100) NOT NULL,
apellido1 VARCHAR(100) NOT NULL,
apellido2 VARCHAR(100) NOT NULL,
posicion ENUM('PORTERO', 'DEFENSA', 'MEDIO', 'DELANTERO') NOT NULL,
equipo_id BIGINT NOT NULL, -- FK a equipos.id (UUID)
PRIMARY KEY (id),
INDEX idx_jugadores_equipo (equipo_id),
CONSTRAINT fk_jugadores_equipos
FOREIGN KEY (equipo_id)
REFERENCES equipos(id)
ON UPDATE CASCADE
ON DELETE RESTRICT,
-- Para evitar dorsales duplicados dentro del mismo equipo
UNIQUE KEY uk_jugadores_equipo_dorsal (equipo_id, dorsal)
) ENGINE=InnoDB;

-- Tabla ÁRBITROS
CREATE TABLE IF NOT EXISTS arbitros (
id VARCHAR(100) NOT NULL, -- UUID (ID de colegiado)
nombre VARCHAR(100) NOT NULL,
apellido1 VARCHAR(100) NOT NULL,
apellido2 VARCHAR(100) NOT NULL,
rol ENUM('PRINCIPAL', 'ASISTENTE') NOT NULL,
PRIMARY KEY (id)
) ENGINE=InnoDB;

-- Tabla PARTIDOS
CREATE TABLE IF NOT EXISTS partidos (
id CHAR(36) NOT NULL, -- UUID (IDPartido)
equipo1_id BIGINT NOT NULL, -- FK a equipos.id
equipo2_id BIGINT NOT NULL, -- FK a equipos.id
arbitro1_id CHAR(36) NOT NULL, -- FK a arbitros.id
arbitro2_id CHAR(36) NOT NULL, -- FK a arbitros.id
PRIMARY KEY (id),
INDEX idx_partidos_equipo1 (equipo1_id),
INDEX idx_partidos_equipo2 (equipo2_id),
INDEX idx_partidos_arbitro1 (arbitro1_id),
INDEX idx_partidos_arbitro2 (arbitro2_id),
CONSTRAINT fk_partidos_equipo1
FOREIGN KEY (equipo1_id)
REFERENCES equipos(id)
ON UPDATE CASCADE
ON DELETE RESTRICT,
CONSTRAINT fk_partidos_equipo2
FOREIGN KEY (equipo2_id)
REFERENCES equipos(id)
ON UPDATE CASCADE
ON DELETE RESTRICT,
CONSTRAINT fk_partidos_arbitro1
FOREIGN KEY (arbitro1_id)
REFERENCES arbitros(id)
ON UPDATE CASCADE
ON DELETE RESTRICT,
CONSTRAINT fk_partidos_arbitro2
FOREIGN KEY (arbitro2_id)
REFERENCES arbitros(id)
ON UPDATE CASCADE
ON DELETE RESTRICT
) ENGINE=InnoDB;
