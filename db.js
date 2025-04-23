const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '@c9h3a4k6r4i', // No encodeURIComponent needed
  database: 'VendingMachineDB', // Must match EXACT case
  waitForConnections: true,
  connectionLimit: 10
});

// Test connection immediately
pool.query('SELECT 1+1 AS test')
  .then(() => console.log('✅ Database connected'))
  .catch(err => console.error('❌ Connection failed:', err.message));

module.exports = pool;
