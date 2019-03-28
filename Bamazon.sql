
DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price INTEGER(30) NULL,
stock_quantity INTEGER(30) NULL,

  PRIMARY KEY (item_id)

);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("lamborgini", "car", "100", 60); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ferrari", "car", "100", 50); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BMW", "car", "100", 70); 


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Porsche", "car", "100", 80); 


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mercedes", "car", "100", 50); 


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Honda", "car", "100", 50); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yamaha", "car", "100", 50); 


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Prince", "car", "100", 50); 



INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mazda", "car", "100", 50); 


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Corola", "car", "100", 50); 

SELECT*FROM products;

