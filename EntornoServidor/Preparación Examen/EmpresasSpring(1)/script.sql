CREATE DATABASE IF NOT EXISTS empresa_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;
 
USE empresa_db;

create user if not exists 'brasero'@'localhost' identified by '1234';
grant all privileges on empresa_db.* to 'brasero'@'localhost';

CREATE TABLE IF NOT EXISTS empresas (
  id BIGINT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB;
 

CREATE TABLE IF NOT EXISTS empleados (
  id BIGINT NOT NULL AUTO_INCREMENT,
  empresa_id BIGINT NOT NULL,   -- @JoinColumn(name = "empresa_id", nullable = false)
  nombre VARCHAR(255) NOT NULL,
  apellido VARCHAR(255) NOT NULL,
  edad INT,
  PRIMARY KEY (id),
  INDEX idx_empleados_empresa_id (empresa_id),
  CONSTRAINT fk_empleados_empresas
    FOREIGN KEY (empresa_id)
    REFERENCES empresas(id)
    ON UPDATE CASCADE
    ON DELETE RESTRICT
) ENGINE=InnoDB;
 
-- Datos de prueba para EMPRESAS
INSERT INTO empresas (nombre) VALUES ('Empresa A');
INSERT INTO empresas (nombre) VALUES ('Empresa B');

select * from empresas;