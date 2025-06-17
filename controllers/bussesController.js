const db = require('../utils/db-connection');

const addBusses = (req, res) => {
  const { id, busNumber, totalSeats, availableSeats } = req.body;

  const insertQuery = `INSERT INTO Buses (id, busNumber, totalSeats, availableSeats) VALUES (?, ?, ?, ?)`;

  db.execute(insertQuery, [id, busNumber, totalSeats, availableSeats], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Failed to insert bus');
    }

    console.log('Bus inserted successfully');
    res.status(200).send(`Bus with number ${busNumber} successfully added`);
  });
};

const getAllBusses = (req, res) => {
  const minSeats = req.params.seats; // Get the seat value from URL

  const selectQuery = `SELECT * FROM Buses WHERE availableSeats >= ?`;

  db.execute(selectQuery, [minSeats], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Failed to fetch buses');
    }

    res.status(200).json(results);
  });
};

module.exports = {
  addBusses,
  getAllBusses,
};
