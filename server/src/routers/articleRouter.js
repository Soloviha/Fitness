const articleController = require('../controllers/articleController');


const articleRouter = require('express').Router();

articleRouter.route('/').get(articleController.getAll);

module.exports = articleRouter;
