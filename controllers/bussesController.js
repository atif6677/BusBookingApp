const {Busses}= require('../models/allModel');
const {Op} = require('sequelize');

const addBusses = async(req, res) => {
  
  try {
    const { id, busNumber, totalSeats, availableSeats } = req.body;
    const busId = await Busses.create({
      id:id,
      busNumber:busNumber,
      totalSeats : totalSeats,
      availableSeats : availableSeats
    });
    return res.status(201).json({ message: 'Bus added successfully', busId });
    
  } catch (error) {
    console.error('Error inserting data:', error);
    return res.status(500).send('Failed to insert bus');
  }
}

const getAllBusses = async(req, res) => {
  try {
    const minSeats = req.params.seats; // Get the seat value from URL
    const buses = await Busses.findAll({
      where: {
        availableSeats: {
          [Op.gte]: minSeats
        }
      }
    });
    res.status(200).json(buses);
  } catch (error) {
    console.error('Error fetching data:', error);
    return res.status(500).send('Failed to fetch buses');
  }
}


module.exports = {
  addBusses,
  getAllBusses,
};
