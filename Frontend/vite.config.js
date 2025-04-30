import tailwindScrollbarHide from "tailwind-scrollbar-hide";
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { plugin } from "mongoose";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), plugin[tailwindScrollbarHide]],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      }
    }
  }
})
