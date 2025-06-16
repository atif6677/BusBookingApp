const express = require('express');
const mysql = require('mysql2');
const app = express();

 const connection = mysql.createConnection({
 host: 'localhost',
user: 'root',
password: 'Atif@123',
database: 'tsetdb'
}) 

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');

  const creationQuery = `create table  if not exists Students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    email VARCHAR(20) NOT NULL UNIQUE
  )`;

  connection.execute(creationQuery, (err, results) => {
    if (err) {
      console.error('Error creating table:', err);
      connection.end();
      return;
    } else {
      console.log('Table created or already exists');
    }
  });
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
}); 


const port =3000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});