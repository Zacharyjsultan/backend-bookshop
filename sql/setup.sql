DROP table if exists books_authors;
DROP table if exists books;
Drop table if exists authors;

CREATE table books (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR NOT NULL,
  released INT NOT NULL
);

INSERT INTO books (title, released) VALUES
('How the West became East', 2912),
('WHAT WILL HAPPEN IN THE YEAR 2000', 2001),
('TO WRITE A BOOK', 1802),
('The Chungus Amungus', 1934),
('A Mycologists guide to Chess', 2011),
('A Fishermens Guide to Darts', 2010);


CREATE table authors (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR NOT NULL,
  dob DATE,
  pod VARCHAR
);

INSERT INTO authors (name, dob, pod) VALUES
('Rauf Tapatio', '1988-12-01', 'Canada'), 
('Miquel', '1857-01-12', 'Mazatlan'),
('Abalone Simpson', '2098-04-02', 'MAINE'),
('Neil River', '1966-09-02', 'Xocitil'),
('Terrie Cruise', '1745-09-02', 'Uzbekistan');


CREATE table books_authors (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  book_id INT,
  author_id INT,
  FOREIGN KEY (book_id) REFERENCES books(id),
  FOREIGN KEY (author_id) REFERENCES authors(id)
);

INSERT INTO books_authors(book_id, author_id) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 2),
(5, 3),
(6, 4),
(6, 5);