import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Set initial theme
const savedTheme = localStorage.getItem('theme') || 'dark'
document.body.className = savedTheme === 'dark' ? 'dark-mode' : 'light-mode'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

