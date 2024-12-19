import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://knnhfplevewsnqnrexkd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtubmhmcGxldmV3c25xbnJleGtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1NDcxMzMsImV4cCI6MjA1MDEyMzEzM30.2bWb3sZCdvE9scjShIaPs5wrNnUwx4DRgfDuKfSqy3g')
