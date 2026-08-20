import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

const supabase = createClient(process.env.SUPABASE_URL,process.env.SUPABASE_ANON_KEY)

const getUsers = async () => {
    const { data, error } = await supabase.from('users').select('*')
    console.log('data:', data)
    console.log('error:', error)
}

getUsers()