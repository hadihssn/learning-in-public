import express from 'express'
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_ANON_KEY)

const app = express()
app.use(express.json())

// fetch route
app.get('/users', async (req, res) => {
    const { data, error } = await supabase.from('users').select('*')
    if (error) return res.status(500).json({ error: error.message })
    res.json(data)
})

// insert route
app.post('/users', async (req, res) => {
    const { data, error } = await supabase.from('users').insert(
        [{ name: req.body.name, email: req.body.email }]
    ).select()
    if (error) return res.status(500).json({ error: error.message })
    res.json(data)
})

// delete route
app.delete('/users/:id', async (req, res) => {

    console.log(req.params.id, typeof req.params.id)

    const { data, error } = await supabase.from('users')
    .update( {deleted_at: new Date().toISOString() })
    .eq('id', req.params.id)
    .select()
    
    if (error) return res.status(500).json({ error: error.message })
    if (data.length === 0) return res.status(404).json({ error: 'User missing'})
    res.json(data)
})

app.listen(4000, () => {
    console.log('Server running on port 4000')
})