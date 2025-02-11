
import { createClient } from '@supabase/supabase-js'
import { Database } from './supabase-types'

const supabaseUrl = 'https://your-project-url.supabase.co'
const supabaseKey = 'your-anon-key'

export const supabase = createClient<Database>(supabaseUrl, supabaseKey)
