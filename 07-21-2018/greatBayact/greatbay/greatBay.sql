


USE new_greatbay;

CREATE TABLE for_auction (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  item VARCHAR(100) NULL,
  starting_bid FLOAT(9,2)NOT NULL,
  bidder VARCHAR(50)NOT NULL
  
);



SELECT*FROM for_auction;
