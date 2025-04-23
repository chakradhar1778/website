const express = require("express");
const path = require("path");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();

// Initialize database pool
let pool;
(async function initializeDatabase() {
  try {
    pool = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "@c9h3a4k6r4i",
      database: "VendingMachineDB",
      waitForConnections: true,
      connectionLimit: 10,
    });

    const conn = await pool.getConnection();
    console.log("✅ Database connection established");
    await conn.query("SELECT 1 + 1 AS result");
    conn.release();
  } catch (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1);
  }
})();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5500",
      "http://127.0.0.1:5500",
      "http://localhost:3001",
    ],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.static(__dirname));

// HTML Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "HOME.html"));
});

app.get("/HOME.html", (req, res) => {
  res.sendFile(path.join(__dirname, "HOME.html"));
});

app.get("/signup.html", (req, res) => {
  res.sendFile(path.join(__dirname, "signup.html"));
});

app.get("/page.html", (req, res) => {
  res.sendFile(path.join(__dirname, "page.html"));
});

// Database connection middleware
app.use((req, res, next) => {
  if (!pool) {
    return res.status(503).json({
      success: false,
      error: "Database connection not ready",
    });
  }
  next();
});

// Login Endpoint
app.post("/api/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Login attempt:", { username, password }); // Debug log

    const [users] = await pool.query("SELECT * FROM Customer WHERE name = ?", [
      username,
    ]);

    console.log("Database result:", users); // Debug log

    if (users.length === 0) {
      return res.status(401).json({
        success: false,
        error: "User not found",
      });
    }

    if (password !== users[0].password_hash) {
      return res.status(401).json({
        success: false,
        error: "Invalid password",
      });
    }

    res.json({
      success: true,
      redirect: "/page.html",
      userId: users[0].customer_id,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({
      success: false,
      error: "Server error",
      details: err.message,
    });
  }
});

// Signup Endpoint
app.post("/api/signup", async (req, res) => {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    const { name, phone, password } = req.body;
    console.log(name + " " + password);

    if (!name || !phone || !password) {
      throw new Error("All fields are required");
    }

    if (!/^\d{10}$/.test(phone)) {
      throw new Error("Phone must be 10 digits");
    }

    const [existing] = await connection.query(
      "SELECT 1 FROM Customer WHERE name = ?",
      [name]
    );

    if (existing.length > 0) {
      throw new Error("Customer already registered");
    }

    // const [user] = await connection.query(
    //   'INSERT INTO User (username, password_hash, role) VALUES (?, ?, "customer")',
    //   [name, password]
    // );

    const temp = await connection.query(
      "INSERT INTO Customer (name, email, phone ,password_hash )  VALUES ( ?, ?, ?, ?)",
      [name, `${name}@vendmaadi.com`, phone, password]
    );

    console.log(`User registerd successfully ${temp}`);

    await connection.commit();
    res.json({
      success: true,
      redirect: "/home.html",
    });
  } catch (err) {
    await connection.rollback();
    console.error("Signup error:", err);
    res.status(400).json({
      success: false,
      error: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  } finally {
    connection.release();
  }
});

app.get("/api/cart", async (req, res) => {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    const {userId} = req.query;
  console.log(userId);
  

    if (!userId) {
      throw new Error("UserId is required");
    }

    const [existing] = await connection.query(
      "SELECT * FROM Orders WHERE customer_id = ?",
      [userId]
    );

    console.log(`Orders are :  ${existing}`);

    await connection.commit();
    res.json({
      success: true,
      cart : existing
    });
  } catch (err) {
    await connection.rollback();
    console.error("Cart getting error:", err);
    res.status(400).json({
      success: false,
      error: err.message,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    });
  } finally {
    connection.release();
  }
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: "Something broke!",
    details: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("Test these URLs:");
  console.log("- http://localhost:3001/HOME.html");
  console.log("- http://localhost:3001/signup.html");
  console.log("- http://localhost:3001/page.html");
});
