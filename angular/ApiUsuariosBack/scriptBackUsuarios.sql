DROP DATABASE IF EXISTS usuarios;

CREATE DATABASE IF NOT EXISTS usuarios;

use usuarios;

DROP TABLE IF EXISTS usuario;

CREATE TABLE IF NOT EXISTS usuario(
	id_usuario VARCHAR(50) PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    birth_date DATE NOT NULL,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(60) NOT NULL,
    image VARCHAR(150) NOT NULL,
    user_password VARCHAR(25) NOT NULL,
    job VARCHAR(50) NOT NULL,
    years_experience TINYINT NOT NULL,
    comments VARCHAR(200) NOT NULL
);

INSERT INTO usuario VALUES
('u001','Laura','Gómez','1995-04-18','lgomez','laura.gomez@email.com','https://randomuser.me/api/portraits/women/1.jpg','123456','Frontend Developer',3,'Muy buena adaptación al equipo'),
('u002','Carlos','Pérez','1990-11-02','cperez','carlos.perez@email.com','https://randomuser.me/api/portraits/men/2.jpg','123456','Backend Developer',6,'Especialista en APIs REST'),
('u003','Marta','López','1998-06-25','mlopez','marta.lopez@email.com','https://randomuser.me/api/portraits/women/3.jpg','123456','UX Designer',2,'Creativa y muy detallista'),
('u004','David','Martín','1987-09-14','dmartin','david.martin@email.com','https://randomuser.me/api/portraits/men/4.jpg','123456','Project Manager',10,'Excelente liderazgo'),
('u005','Ana','Ruiz','1993-01-08','aruiz','ana.ruiz@email.com','https://randomuser.me/api/portraits/women/5.jpg','123456','QA Tester',4,'Detecta errores rápidamente'),

('u006','Javier','Hernández','1991-03-12','jhernandez','javier.h@email.com','https://randomuser.me/api/portraits/men/6.jpg','123456','DevOps Engineer',5,'Automatización y CI/CD'),
('u007','Lucía','Navarro','1999-07-19','lnavarro','lucia.n@email.com','https://randomuser.me/api/portraits/women/7.jpg','123456','Junior Developer',1,'Aprende muy rápido'),
('u008','Sergio','Romero','1985-12-30','sromero','sergio.r@email.com','https://randomuser.me/api/portraits/men/8.jpg','123456','Tech Lead',12,'Referente técnico'),
('u009','Paula','Méndez','1996-05-03','pmendez','paula.m@email.com','https://randomuser.me/api/portraits/women/9.jpg','123456','Data Analyst',3,'Muy analítica'),
('u010','Iván','Torres','1992-08-22','itorres','ivan.t@email.com','https://randomuser.me/api/portraits/men/10.jpg','123456','Full Stack Developer',5,'Perfil muy completo'),

('u011','Elena','Santos','1989-10-10','esantos','elena.s@email.com','https://randomuser.me/api/portraits/women/11.jpg','123456','Product Owner',8,'Muy orientada a negocio'),
('u012','Raúl','Cano','1994-02-14','rcano','raul.c@email.com','https://randomuser.me/api/portraits/men/12.jpg','123456','Mobile Developer',4,'Especialista en Angular'),
('u013','Nuria','Vega','1997-06-01','nvega','nuria.v@email.com','https://randomuser.me/api/portraits/women/13.jpg','123456','UI Designer',2,'Interfaces limpias'),
('u014','Pablo','Iglesias','1986-11-21','piglesias','pablo.i@email.com','https://randomuser.me/api/portraits/men/14.jpg','123456','CTO',15,'Visión estratégica'),
('u015','Sandra','Molina','1995-09-09','smolina','sandra.m@email.com','https://randomuser.me/api/portraits/women/15.jpg','123456','Marketing Tech',3,'Buen enfoque técnico'),
('u016','Álvaro','Prieto','1990-04-17','aprieto','alvaro.p@email.com','https://randomuser.me/api/portraits/men/16.jpg','123456','Backend Developer',7,'Buen manejo de bases de datos'),
('u017','Beatriz','Ortega','1998-12-05','bortega','beatriz.o@email.com','https://randomuser.me/api/portraits/women/17.jpg','123456','Junior QA',1,'Muy meticulosa'),
('u018','Miguel','Reyes','1984-06-23','mreyes','miguel.r@email.com','https://randomuser.me/api/portraits/men/18.jpg','123456','System Administrator',14,'Infraestructura estable'),
('u019','Clara','Domínguez','1996-02-11','cdominguez','clara.d@email.com','https://randomuser.me/api/portraits/women/19.jpg','123456','UX Researcher',3,'Excelente trato con usuarios'),
('u020','Diego','Flores','1993-08-29','dflores','diego.f@email.com','https://randomuser.me/api/portraits/men/20.jpg','123456','Frontend Developer',4,'Muy fuerte en Angular'),

('u021','Irene','Campos','1991-05-16','icampos','irene.c@email.com','https://randomuser.me/api/portraits/women/21.jpg','123456','Scrum Master',6,'Gran facilitadora'),
('u022','Hugo','Suárez','1999-09-03','hsuarez','hugo.s@email.com','https://randomuser.me/api/portraits/men/22.jpg','123456','Junior Developer',1,'Motivado y constante'),
('u023','Rocío','León','1988-11-27','rleon','rocio.l@email.com','https://randomuser.me/api/portraits/women/23.jpg','123456','HR Tech',9,'Buena gestión de talento'),
('u024','Fernando','Vidal','1985-01-19','fvidal','fernando.v@email.com','https://randomuser.me/api/portraits/men/24.jpg','123456','Software Architect',15,'Diseños escalables'),
('u025','Patricia','Gil','1997-07-07','pgil','patricia.g@email.com','https://randomuser.me/api/portraits/women/25.jpg','123456','UI Developer',2,'Gran atención al detalle'),

('u026','Rubén','Serrano','1992-03-28','rserrano','ruben.s@email.com','https://randomuser.me/api/portraits/men/26.jpg','123456','Full Stack Developer',5,'Buen equilibrio front/back'),
('u027','Eva','Pascual','1994-10-13','epascual','eva.p@email.com','https://randomuser.me/api/portraits/women/27.jpg','123456','Data Engineer',4,'Pipelines eficientes'),
('u028','Óscar','Nieto','1989-06-01','onieto','oscar.n@email.com','https://randomuser.me/api/portraits/men/28.jpg','123456','DevOps Engineer',8,'Optimización cloud'),
('u029','Natalia','Ramos','1996-01-24','nramos','natalia.r@email.com','https://randomuser.me/api/portraits/women/29.jpg','123456','Business Analyst',3,'Muy orientada a métricas'),
('u030','Adrián','Cruz','1991-12-09','acruz','adrian.c@email.com','https://randomuser.me/api/portraits/men/30.jpg','123456','API Developer',6,'APIs limpias y documentadas'),

('u031','Lorena','Peña','1995-04-04','lpena','lorena.p@email.com','https://randomuser.me/api/portraits/women/31.jpg','123456','Content Tech',3,'Buena integración con producto'),
('u032','Marcos','Blanco','1987-09-18','mblanco','marcos.b@email.com','https://randomuser.me/api/portraits/men/32.jpg','123456','Security Analyst',11,'Alta conciencia de seguridad'),
('u033','Alicia','Fuentes','1998-02-26','afuentes','alicia.f@email.com','https://randomuser.me/api/portraits/women/33.jpg','123456','Junior Frontend',1,'Muy buena base'),
('u034','Tomás','Calvo','1983-07-30','tcalvo','tomas.c@email.com','https://randomuser.me/api/portraits/men/34.jpg','123456','IT Manager',18,'Gestión sólida'),
('u035','Silvia','Moreno','1992-11-15','smoreno','silvia.m@email.com','https://randomuser.me/api/portraits/women/35.jpg','123456','QA Automation',5,'Tests automáticos fiables'),

('u036','Andrés','Luna','1990-01-20','aluna','andres.l@email.com','https://randomuser.me/api/portraits/men/36.jpg','123456','Cloud Engineer',7,'Arquitectura en AWS'),
('u037','Noelia','Ríos','1997-08-08','nrios','noelia.r@email.com','https://randomuser.me/api/portraits/women/37.jpg','123456','UX Writer',2,'Textos claros'),
('u038','Guillermo','Pardo','1986-05-05','gpardo','guillermo.p@email.com','https://randomuser.me/api/portraits/men/38.jpg','123456','Database Admin',13,'Optimización SQL'),
('u039','Cristina','Soto','1994-03-03','csoto','cristina.s@email.com','https://randomuser.me/api/portraits/women/39.jpg','123456','Product Designer',4,'Diseño centrado en usuario'),
('u040','Víctor','Marín','1991-06-14','vmarin','victor.m@email.com','https://randomuser.me/api/portraits/men/40.jpg','123456','Full Stack Developer',6,'Alta productividad'),

('u041','Raquel','Ibañez','1993-09-26','ribanez','raquel.i@email.com','https://randomuser.me/api/portraits/women/41.jpg','123456','Support Engineer',5,'Excelente trato'),
('u042','Luis','Benítez','1988-12-01','lbenitez','luis.b@email.com','https://randomuser.me/api/portraits/men/42.jpg','123456','Infrastructure Lead',12,'Sistemas robustos'),
('u043','Mónica','Carrasco','1996-10-17','mcarrasco','monica.c@email.com','https://randomuser.me/api/portraits/women/43.jpg','123456','Marketing Automation',3,'Buenas campañas'),
('u044','Samuel','Acosta','1999-04-21','sacosta','samuel.a@email.com','https://randomuser.me/api/portraits/men/44.jpg','123456','Intern Developer',0,'Gran potencial'),
('u045','Verónica','Redondo','1990-07-11','vredondo','veronica.r@email.com','https://randomuser.me/api/portraits/women/45.jpg','123456','Customer Success',7,'Clientes satisfechos'),

('u046','Jorge','Mora','1985-02-08','jmora','jorge.m@email.com','https://randomuser.me/api/portraits/men/46.jpg','123456','CTO Assistant',16,'Soporte técnico clave'),
('u047','Isabel','Navarrete','1997-05-29','inavarrete','isabel.n@email.com','https://randomuser.me/api/portraits/women/47.jpg','123456','Frontend Developer',2,'Buen manejo de CSS'),
('u048','Daniel','Peinado','1992-08-16','dpeinado','daniel.p@email.com','https://randomuser.me/api/portraits/men/48.jpg','123456','Backend Developer',6,'Código limpio'),
('u049','Carmen','Salas','1989-01-13','csalas','carmen.s@email.com','https://randomuser.me/api/portraits/women/49.jpg','123456','Product Manager',9,'Muy organizada'),
('u050','Mario','Esteban','1995-06-06','mesteban','mario.e@email.com','https://randomuser.me/api/portraits/men/50.jpg','123456','Game Developer',3,'Creativo'),

('u051','Teresa','Vargas','1987-03-31','tvargas','teresa.v@email.com','https://randomuser.me/api/portraits/women/51.jpg','123456','Legal Tech',11,'Cumplimiento normativo'),
('u052','Alberto','Roldán','1993-12-19','aroldan','alberto.r@email.com','https://randomuser.me/api/portraits/men/52.jpg','123456','AI Engineer',4,'Modelos eficientes'),
('u053','Julia','Ponce','1998-09-02','jponce','julia.p@email.com','https://randomuser.me/api/portraits/women/53.jpg','123456','Junior Data Analyst',1,'Buena base estadística'),
('u054','Enrique','López','1984-04-25','elopez','enrique.l@email.com','https://randomuser.me/api/portraits/men/54.jpg','123456','Software Consultant',14,'Amplia experiencia'),
('u055','María','Crespo','1996-11-30','mcrespo','maria.c@email.com','https://randomuser.me/api/portraits/women/55.jpg','123456','Frontend Developer',3,'Componentes reutilizables');


