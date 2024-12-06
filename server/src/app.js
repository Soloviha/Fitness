const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const authRouter = require('./routers/authRouter');
const tokenRouter = require('./routers/tokenRouter');
const typeOfWorkoutRouter = require('./routers/typeOfWorkoutRouter');
const workoutRouter = require('./routers/workoutRouter');
const UserParameterRouter = require('./routers/userParameterRouter');
// const userParameterRouter = require('./routers/userParameterRoute')

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', authRouter);
app.use('/api/token', tokenRouter);
app.use('/api/typeOfWorkouts', typeOfWorkoutRouter);
app.use('/api/workouts', workoutRouter);
app.use('/api/userP', UserParameterRouter);

module.exports = app;
