const workoutController = require('../controllers/workoutController')

const workoutRouter = require('express').Router();

workoutRouter.route('/').get(workoutController.getAllWorkouts)

module.exports = workoutRouter;