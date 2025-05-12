// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://rhcbcxvulzdscnkzvbky.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoY2JjeHZ1bHpkc2Nua3p2Ymt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU2NTEsImV4cCI6MjA2MjExMTY1MX0.s5RX_c9ROshX7xayTIcOyduTMnzhlvCe9pO0lzZTLrI'
)