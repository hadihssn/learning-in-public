import express from 'express'
import 'dotenv/config'
import userRoutes from './routes/users.js'

const app = express()
app.use(express.json())

app.use('/', userRoutes)

app.listen(4000, () => {
    console.log('Server running on port 4000')
})