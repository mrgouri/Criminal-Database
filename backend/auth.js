const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysqlw73',
  database: 'auth', 
});


const isAuthenticated = (email, password, callback) => {
  const sql = 'SELECT * FROM user_accounts WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return callback(err, null);
    }

    if (results.length === 0) {
      return callback(null, false); 
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        console.error('Error comparing passwords:', err);
        return callback(err, null);
      }

      if (!isMatch) {
        return callback(null, false); 
      }

      return callback(null, true);
    });
  });
};

router.post('/user', (req, res) => {
  const { email, password } = req.body;

  isAuthenticated(email, password, (err, authenticated) => {
    if (err) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (!authenticated) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    
    res.redirect('/search'); 
  });
});

module.exports = router;
