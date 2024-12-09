const chatController = require('../controllers/chatController')

const chatRouter = require('express').Router();

chatRouter.route('/').get(chatController.getAllMessages).post(chatController.getResponse)

module.exports = chatRouter;