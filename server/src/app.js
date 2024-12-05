const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const authRouter = require('./routers/authRouter');
const tokenRouter = require('./routers/tokenRouter');
const typeOfWorkoutRouter = require('./routers/typeOfWorkoutRouter')
const workoutRouter = require('./routers/workoutRouter')

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/token', tokenRouter);
app.use('/api/typeOfWorkouts', typeOfWorkoutRouter);
app.use('/api/workouts', workoutRouter);

module.exports = app;