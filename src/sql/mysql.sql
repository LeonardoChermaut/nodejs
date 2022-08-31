CREATE TABLE USUARIO (
  name varchar(50),
  lastname varchar(50),
  email varchar(100),
  age INT
);

INSERT INTO USUARIO (name, lastname, email, age) VALUE(
  "Amanda",
  "Alves",
  "amanda@hotmail.com",
  26
);

SELECT * FROM USUARIO WHERE age = 25;

-- DELETE
DELETE FROM USUARIO WHERE NAME = "";

-- UPDATE
UPDATE USUARIO SET NAME = "Amandinha" WHERE NAME = "AMANDA";