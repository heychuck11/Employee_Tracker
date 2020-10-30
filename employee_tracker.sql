-- create the employee database--
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

--create the tables--
CREATE TABLE department(
  id INTEGER (10) AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30),


)

CREATE TABLE role(
  id INTEGER(10) AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL(10, 4),
  department_id INTEGER(10),

)

CREATE TABLE employee(
  id INTEGER(10) AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER(10),
  manager_id INTEGER(10),

)

-- making the rows--

INSERT INTO department(name)
VALUES("Sales"), ("Engineering"), ("Finance"), ("Legal")

INSERT INTO role(title, salary, department_id)
VALUES("Sales Person", 50000, 1),("software engineer", 100000, 2), ("Lawyer", 90000, 3), ("Accountant", 75000, 4)

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES("Charlie", "Howard", 2, 2), ("Tori", "Howard", 3, 4), ("Jeffrey", "Howard", 4, 6)

SELECT * FROM department
SELECT * FROM role
SELECT * FROM employee

SELECT title, name,  firstName, lastName
FROM role 
INNER JOIN employee ON role.role.id = employee.role.id