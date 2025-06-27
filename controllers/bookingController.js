const { Booking, Users, Busses } = require('../models/allModel');

const addBooking = async(req, res) => {
    try {
        const { userId, busId, seatNumber } = req.body;
        const booking = await Booking.create({
            userId,
            busId,
            seatNumber
        });
        return res.status(201).json({ message: 'Booking added successfully', booking });
    } catch (error) {
        console.error('Error adding booking:', error);
        return res.status(500).send('Failed to add booking');
    }
};

const getBookingsByUser = async(req, res) => {
    try {
        const userId = req.params.id;
        const bookings = await Booking.findAll({
            where: { userId },
            include: [{
                model: Busses,
                attributes: ['busNumber']
            }]
        });
        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching user bookings:', error);
        return res.status(500).send('Failed to fetch user bookings');
    }
};

const getBookingsByBus = async(req, res) => {
    try {
        const busId = req.params.id;
        const bookings = await Booking.findAll({
            where: { busId },
            include: [{
                model: Users,
                attributes: ['name', 'email']
            }]
        });
        res.status(200).json(bookings);
    } catch (error) {
        console.error('Error fetching bus bookings:', error);
        return res.status(500).send('Failed to fetch bus bookings');
    }
};

module.exports = {
    addBooking,
    getBookingsByUser,
    getBookingsByBus
};
