const express = require('express');
const UserParameterController = require('../controllers/UserParameterController');
const upload = require('../config/multerConfig'); 

const router = express.Router();

router.post('/', upload.single('photo'), UserParameterController.createParameter);

module.exports = router;
