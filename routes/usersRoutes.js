const express = require('express');
const usersControllers= require('../controllers/usersControllers');
const router = express.Router();

router.post('/',usersControllers.addEntries);
router.get('/', usersControllers.getAllUsers);


module.exports = router;