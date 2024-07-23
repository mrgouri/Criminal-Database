const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json()); 


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysqlw73',
  database: 'hospital',
});

app.post('/search', (req, res) => {
    const { name, specification, patientLocation } = req.body;
  
    
    let sql = 'SELECT doctors.* FROM doctors INNER JOIN patient ON doctors.p_id=patient.p_id';
    if (name) sql += ` AND doctors.name LIKE '%${name}%'`;
  if (specification) sql += ` AND doctors.specification LIKE '%${specification}%'`;
  if (patientLocation) sql += ` AND patient.city LIKE '%${patientLocation}%'`;

    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.json(results);
    });
  });
  

app.listen(8081, () => {
  console.log('Server is running on port 8081');
});
