const express = require('express');
const mysql = require('mysql2');
const app = express();

 const connection = mysql.createConnection({
 host: 'localhost',
user: 'root',
password: 'Atif@123',
database: 'testdb'
}) 




connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');

  const creatUsersTable = `create table  if not exists Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    email VARCHAR(20) NOT NULL UNIQUE
  )`;

  const createBusesTable = `create table if not exists Buses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber int NOT NULL UNIQUE,
    totalSeats int NOT NULL,
    availableSeats int NOT NULL
    )`;

  const createBookingsTable = `create table if not exists Booking (
  id INT AUTO_INCREMENT PRIMARY KEY,
  seatNumber INT NOT NULL
  )`;

const createTablePayments = `create table if not exists Payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  amountPaid INT NOT NULL,
  paymentStatus varchar(20) NOT NULL
)`;


  connection.execute(creatUsersTable, (err, results) => {
    if (err) {
      console.error('Error creating table:', err);
      connection.end();
      return;
    } else {
      console.log('Table created or already exists');
    }
  });



    connection.execute(createBusesTable, (err, results) => {
        if (err) {
        console.error('Error creating table:', err);
        connection.end();
        return;
        } else {
        console.log('Table created or already exists');
        }
    });

    connection.execute(createBookingsTable, (err, results) => {
        if (err) {
        console.error('Error creating table:', err);
        connection.end();
        return;
        } else {
        console.log('Table created or already exists');
        }
    });

    connection.execute(createTablePayments, (err, results) => {
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