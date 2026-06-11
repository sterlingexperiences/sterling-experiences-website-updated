import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://bastubqkmghpvjijvsfs.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhc3R1YnFrbWdocHZqaWp2c2ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzNDg1ODYsImV4cCI6MjA1MzkyNDU4Nn0.9Cpf6RX3gu6o0RjXahilYPde-1FdwXBwOb4kwaMiaro"

export const supabase = createClient(supabaseUrl, supabaseKey)
