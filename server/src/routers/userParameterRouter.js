const express = require('express');
const UserParameterController = require('../controllers/userParameterController');
const upload = require('../middlewares/multer');
const { verifyAccessToken } = require('../middlewares/verifyTokens');
// const upload = require('../config/multerConfig');

const UserParameterRouter = express.Router();


UserParameterRouter.get('/', UserParameterController.getAllParameters);

UserParameterRouter.post(
  '/', verifyAccessToken,
  upload.single('img'),
  UserParameterController.createParameter,
);

UserParameterRouter.put('/:id',verifyAccessToken, upload.single('img'), UserParameterController.updateParameter);
UserParameterRouter.get('/my', verifyAccessToken, UserParameterController.getParameterMyUserId);

module.exports = UserParameterRouter;
