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
INSERT INTO Customer (name, email, phone, password_hash) 
VALUES ('admin', 'admin@vendmadi.com', '45852455424', 'hello123');

-- 4. Payment Table (created before Orders to avoid circular reference)
CREATE TABLE IF NOT EXISTS PaymentHistory (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    payment_method ENUM('cash', 'card', 'mobile_payment') NOT NULL,
    payment_status ENUM('pending', 'completed', 'failed') DEFAULT 'pending',
    amount INT NOT NULL,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id) ON DELETE CASCADE
);

-- 5. Orders Table (Customer Purchases)
CREATE TABLE IF NOT EXISTS Orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    product_id VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id) ON DELETE CASCADE
);

-- 6. Order Details (Products in Each Order)
CREATE TABLE IF NOT EXISTS OrderDetails (
    order_detail_id INT AUTO_INCREMENT PRIMARY KEY,
    payment_id INT NOT NULL,
    product_id VARCHAR(100) NOT NULL,
    FOREIGN KEY (payment_id) REFERENCES PaymentHistory(payment_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Orders(product_id) ON DELETE CASCADE
);

-- 7. ProductLog table with proper relationships
CREATE TABLE IF NOT EXISTS ProductLog (
    product_id VARCHAR(100) PRIMARY KEY,
    times_ordered BIGINT NOT NULL,
    total_quantity_ordered BIGINT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES Orders(product_id) ON DELETE CASCADE
);

-- 8. Delivery Status table with proper relationships
CREATE TABLE IF NOT EXISTS DeliveryStatus (
    payment_id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    status VARCHAR(9) NOT NULL,
    FOREIGN KEY (payment_id) REFERENCES PaymentHistory(payment_id) ON DELETE CASCADE,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id) ON DELETE CASCADE
);

-- 9. Invoice table with proper relationships
CREATE TABLE IF NOT EXISTS Invoice (
    payment_id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    amount INT NOT NULL,
    most_bought_product VARCHAR(100),
    special_member VARCHAR(3) NOT NULL,
    FOREIGN KEY (payment_id) REFERENCES PaymentHistory(payment_id) ON DELETE CASCADE,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id) ON DELETE CASCADE,
    FOREIGN KEY (most_bought_product) REFERENCES Orders(product_id) ON DELETE SET NULL
);

-- 10. Populate the derived tables with initial data
INSERT INTO ProductLog
SELECT 
    product_id,
    COUNT(*) AS times_ordered,
    SUM(quantity) AS total_quantity_ordered
FROM Orders
GROUP BY product_id;

INSERT INTO DeliveryStatus
SELECT 
    ph.payment_id,
    ph.customer_id,
    CASE 
        WHEN ph.payment_status = 'completed' THEN 'vended'
        ELSE 'cancelled'
    END AS status
FROM PaymentHistory ph;

INSERT INTO Invoice
SELECT 
    ph.payment_id,
    ph.customer_id,
    ph.amount,
    (
        SELECT od.product_id
        FROM OrderDetails od
        WHERE od.payment_id = ph.payment_id
        GROUP BY od.product_id
        ORDER BY COUNT(*) DESC
        LIMIT 1
    ) AS most_bought_product,
    CASE 
        WHEN ph.customer_id = (
            SELECT customer_id
            FROM PaymentHistory
            GROUP BY customer_id
            ORDER BY SUM(amount) DESC
            LIMIT 1
        ) THEN 'Yes'
        ELSE 'No'
    END AS special_member
FROM PaymentHistory ph;

-- 11. Verify setup
SELECT * FROM Invoice;
SELECT * FROM DeliveryStatus;
SELECT * FROM ProductLog;
SELECT * FROM Customer;
SELECT * FROM Orders;
SELECT * FROM PaymentHistory;
SELECT * FROM OrderDetails;