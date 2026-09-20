import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

export const getUsers = async (req, res) => {
    const { data, error } = await supabase.from('users').select('*')
    if (error) return res.status(500).json({ error: error.message })
    res.json(data)
}

export const createUser = async (req, res) => {
    const { data, error } = await supabase.from('users')
        .insert([{ name: req.body.name, email: req.body.email }])
        .select()
    if (error) return res.status(500).json({ error: error.message })
    res.json(data)
}

export const deleteUser = async (req, res) => {
    
    const { data, error } = await supabase.from('users')
        .update({ deleted_at: new Date().toISOString() })
        .eq('id', req.params.id)
        .select()
    
        if (error) return res.status(500).json({ error: error.message })
    if (data.length === 0) return res.status(404).json({ error: 'User missing' })
    res.json(data)
}