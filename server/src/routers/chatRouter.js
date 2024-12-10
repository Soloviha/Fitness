const chatController = require('../controllers/chatController')

const chatRouter = require('express').Router();

chatRouter.route('/').post(chatController.getResponse)

module.exports = chatRouter;
