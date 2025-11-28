CREATE DATABASE IF NOT EXISTS MeteoDaw;
USE MeteoDaw;


create user if not exists 'brasero'@'localhost' identified by '1234';
grant all privileges on MeteoDaw.* to 'brasero'@'localhost';

create table if not exists registros_meteorologicos(
registry_id int auto_increment not null primary key,
nombre_ciudad varchar(20) not null,
temp_min decimal (3,1) not null,
temp_max decimal (3,1) not null,
temp_media decimal (3,1) not null,
viento decimal (3,1),
humedad decimal (3,1),
fecha date not null,
fenomenos_atmos enum ('SECO', 'SOLEADO', 'LLUVIOSO', 'TORMENTOSO', 'NIEVE', 'GRANIZOS')
);


INSERT INTO registros_meteorologicos (nombre_ciudad, temp_min, temp_max, temp_media, viento, humedad, fecha, fenomenos_atmos) VALUES
 ('Madrid', 5.2, 15.6, 10.4, 12.3, 55.0, '2025-11-27', 'SOLEADO'),
 ('Barcelona', 9.5, 17.2, 13.4, 8.1, 68.0, '2025-11-27', 'LLUVIOSO'),
 ('Bilbao', 7.0, 14.8, 10.9, 10.7, 72.0, '2025-11-27', 'TORMENTOSO');
 
 select * from registros_meteorologicos;


