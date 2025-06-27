const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/', bookingController.addBooking);
router.get('/user/:id', bookingController.getBookingsByUser);
router.get('/bus/:id', bookingController.getBookingsByBus);


module.exports = router;
