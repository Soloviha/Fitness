const descCardController = require('../controllers/descCardController');

const descCardRouter = require('express').Router();

descCardRouter.route('/').get(descCardController.getAllDescCard)

module.exports = descCardRouter;


