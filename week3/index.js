console.log(process.env.SUPABASE_URL)

import express from 'express'
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_ANON_KEY)

const app = express()
app.use(express.json())

app.get('/users', async (req, res) => {
    const { data, error } = await supabase.from('users').select('*')
    if (error) return res.status(500).json({ error: error.message })
    res.json(data)
})

app.post('/users', async (req, res) => {
    const { data, error } = await supabase.from('users').insert(
        [{ name: req.body.name, email: req.body.email }]
    ).select()
    if (error) return res.status(500).json({ error: error.message })
    res.json(data)
})

app.listen(4000, () => {
    console.log('Server running on port 4000')
})