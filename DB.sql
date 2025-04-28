-- 1. Create fresh database (will delete existing if exists)
DROP DATABASE IF EXISTS VendingMachineDB;
CREATE DATABASE VendingMachineDB;
USE VendingMachineDB;


-- 2. Create Customer table
CREATE TABLE Customer (
    customer_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    password_hash VARCHAR(255) NOT NULL
    
);

-- 3. Add admin user
INSERT INTO Customer (name, email, phone ,password_hash ) 
VALUES ('admin', 'admin@vendmadi.com', "45852455424",  'hello123');


-- 4. Orders Table (Customer Purchases)
CREATE TABLE IF NOT EXISTS Orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    product_id VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id) ON DELETE CASCADE
);


-- 5. Verify setup
SELECT * FROM Customer;
SELECT * FROM Orders;
DESC Customer;