import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Allow the server to listen on all network interfaces
    allowedHosts: [
      'fd01-2405-201-6806-e071-54f6-c497-ae26-fecf.ngrok-free.app', // Add your ngrok URL
      'localhost', // Allow localhost
      '127.0.0.1', // Allow loopback
    ],
  },
  plugins: [react(), tailwindcss(),],
})
