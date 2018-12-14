/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to execute the queries in this file.
 */
CREATE DATABASE groceryList;
USE groceryList;

CREATE TABLE groceries(
 item varchar(100) not null,
 quantity int not null,
 primary key (item)
);
/*
mysql -u root < "schema.sql"
*/