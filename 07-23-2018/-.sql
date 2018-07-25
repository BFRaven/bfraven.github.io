# Group By Song Example

SELECT COUNT(position), artist
FROM top5000
GROUP BY artist
ORDER BY COUNT(position) DESC

# Search Artist Like Example

SELECT * FROM top5000 
WHERE artist 
LIKE '%he Beatl%'

# Between Example

SELECT * FROM top5000 
WHERE year 
BETWEEN 1964 AND 1965

DROP DATABASE IF EXIST top5000;

CREATE DATABASE top5000;

USE top5000;

CREATE TABLE songs (

position INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
artist VARCHAR(100) NOT NULL,
song VARCHAR(100) NOT NULL,
year INT NULL,
raw_usa FLOAT(5, 3),
raw_uk FLOAT (5, 3),
raw_eur FLOAT (5, 3),
raw_row FLOAT (5, 3)

);


SELECT*FROM Top5000
WHERE year
BETWEEN 1964 AND 1965;


SELECT*FROM Top5000
WHERE artist
LIKE '%he Beatl%';

-- GROUP BY groups elements with shared values
-- SELECT COUNT(position), artist
-- FROM Top5000
-- GROUP BY artist
-- ORDER BY COUNT (position) DESC

-- BETWEEN ? AND ? allows to select from info between specific range.

-- LIKE allows search everything in between the search signs; used in a WHERE clause % sign represents zero one, or multiple characters.