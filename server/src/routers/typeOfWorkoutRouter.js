const typeOfWorkoutController = require('../controllers/typeOfWorkoutController')

const typeOfWorkoutRouter = require('express').Router();

typeOfWorkoutRouter.route('/').get(typeOfWorkoutController.getAllTypes)

module.exports = typeOfWorkoutRouter;