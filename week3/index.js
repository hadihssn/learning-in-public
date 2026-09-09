import express from 'express'

const app = express()
app.use(express.json())

app.get('/users', (req, res) => {
    res.json({message: 'GET user works'})
})

app.post('/users', (req, res) => {
    res.json({message: 'POST user works'})
})

app.listen(4000, () => {
    console.log('Server running on port 3000')
})