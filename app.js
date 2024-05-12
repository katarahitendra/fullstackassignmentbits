const express = require('express')
const morgan = require('morgan')
const createError = require('http-errors')
require('dotenv').config()
require('./helpers/init_mongodb')
const { verifyAccessToken } = require('./helpers/jwt_helper')
require('./helpers/init_redis')
const activityRoutes = require('./Routes/activityRoutes')
const goalRoutes = require('./Routes/goalRoutes'); 
const progressRoutes = require('./Routes/progressRoutes'); 
const workoutPlanRoutes = require('./Routes/workoutPlanRoutes'); 
const smartwatchRoutes = require('./Routes/smartwatchRoutes'); 
const nutritionRoutes = require('./Routes/nutritionRoutes'); 
const AuthRoute = require('./Routes/Auth.route')

const app = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', verifyAccessToken, async (req, res, next) => {
  res.send('Hello There! Welcome to the Fullstack assignment.')
})

app.use('/api/auth', AuthRoute)
app.use('/api/activity', verifyAccessToken, activityRoutes);
app.use('/api/goal', verifyAccessToken, goalRoutes);
app.use('/api/progress', verifyAccessToken, progressRoutes);
app.use('/api/workdoutplan', verifyAccessToken, workoutPlanRoutes);
app.use('/api/device', verifyAccessToken, smartwatchRoutes);
app.use('/api/nutrition', verifyAccessToken, nutritionRoutes);


app.use(async (req, res, next) => {
  next(createError.NotFound())
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
