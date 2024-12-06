const exerciseController = require('../controllers/exerciseController')

const exerciseRouter = require('express').Router();

exerciseRouter.route('/').get(exerciseController.getAllExercise)

module.exports = exerciseRouter;