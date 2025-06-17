const express = require('express');
const router = express.Router();
const bussesController = require('../controllers/bussesController');

router.post('/', bussesController.addBusses);
router.get('/available/:seats', bussesController.getAllBusses);


module.exports = router;