CREATE DATABASE IF NOT EXISTS docker;

USE docker;

CREATE TABLE IF NOT EXISTS aluno (
    id INT(10) AUTO_INCREMENT,
    name VARCHAR(70),
    endereco VARCHAR(255),
    PRIMARY KEY (id)
);

INSERT INTO aluno VALUE(0, "Renato", "Rua 1");

-- docker exec -i mysql-container mysql -uroot -p1234 <api/db/script.sql

-- docker exec -it mysql-container /bin/bash

-- mysql -uroot -p1234

-- use docker;

-- select * from aluno;