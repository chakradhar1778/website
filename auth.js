const pool = require('./db.js');

async function loginUser(username, password) {
  try {
    const [users] = await pool.query(
      'SELECT * FROM User WHERE username = ?', 
      [username]
    );
    
    if (users.length === 0) throw new Error('User not found');
    
    const user = users[0];
    
    // Temporary plain password comparison
    if (password !== user.password_hash) {
      throw new Error('Invalid password');
    }

    return { 
      id: user.login_id,
      username: user.username,
      role: user.role 
    };
  } catch (err) {
    throw err;
  }
}

module.exports = { loginUser };