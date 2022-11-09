-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
-- books_authorS?
DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS books;

CREATE TABLE authors (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  first_name VARCHAR not NULL,
  country VARCHAR
)

INSERt inTo authors (first_name, country) VALUEs
('Georgia', 'Romania')
('SAMUELSONTIN', 'Papa New Guinea')
('Shorsh', 'Mexico')
('Rauf', 'Tajikistan');

CREATE TABLE books (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR NOT NULL,
  year INT NOT NULL,
)

INSERt IntO books (title, year) VALUEs
('How the West became East', 2912),
('WHAT WILL HAPPEN IN THE YEAR 2000', 2001),
('TO WRITE A BOOK', 1802),
('A Mycologists guide to Chess', 2011),
('A Fishermens Guide to Darts', 1010);