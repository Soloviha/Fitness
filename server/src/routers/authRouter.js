const authController = require('../controllers/authController');


const authRouter = require('express').Router();

authRouter.post('/login', authController.login);
authRouter.get('/logout', authController.logout);
authRouter.post('/signup', authController.signup);

module.exports = authRouter;
