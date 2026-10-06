import express from 'express'
import 'dotenv/config'
import userRoutes from './routes/users.js'
import morgan from 'morgan'

const app = express()

// middleware
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/', userRoutes)

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' })
})

// global error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ error: 'Something went wrong' })
})

// start server
app.listen(4000, () => {
    console.log('Server running on port 4000')
})