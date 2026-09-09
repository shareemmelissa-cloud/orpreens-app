import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://jnmguvnsuqqggvqqgltz.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpubWd1dm5zdXFxZ2d2cXFnbHR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5MjQyNTgsImV4cCI6MjEwNDUwMDI1OH0.vsP1bsuWta7TXYL1WxoxYjB4-w3TLG-8C1VwiOzp7LI'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 
