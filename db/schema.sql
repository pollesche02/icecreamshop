CREATE DATABASE icecreamshop_db;

use icecreamshop_db;

CREATE TABLE icecream 
(
id INT auto_increment not NULL,
icecream_flavor varchar (100) not null,
devoured boolean not null,
PRIMARY KEY (id)
);
