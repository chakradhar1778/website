const pool = require('./db.js');

async function testConnection() {
  try {
    const [rows] = await pool.query('SHOW TABLES');
    console.log('✅ Database connected! Tables in your database:', rows);
  } catch (err) {
    console.error('❌ Connection failed:', err.message);
  } finally {
    await pool.end(); // Close the connection
  }
}

testConnection();