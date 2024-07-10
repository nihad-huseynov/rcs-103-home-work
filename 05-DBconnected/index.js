const express = require('express');
const mysql = require('mysql');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MySQL bağlantısı
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Salam123',
  database: 'peopleDB'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL connected...');
});

// GET by ID
app.get('/people/:id', (req, res) => {
  const personId = req.params.id;
  const sql = `SELECT * FROM people WHERE id = ${personId}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// POST data
app.post('/people', (req, res) => {
  const newPerson = req.body;
  const sql = 'INSERT INTO people SET ?';
  db.query(sql, newPerson, (err, result) => {
    if (err) throw err;
    res.send('Person added...');
  });
});

// DELETE by ID
app.delete('/people/:id', (req, res) => {
  const personId = req.params.id;
  const sql = `DELETE FROM people WHERE id = ${personId}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Person deleted...');
  });
});

// Serveri işə salmaq
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
