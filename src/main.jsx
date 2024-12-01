import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PhotoPortfolio from './PhotoPortolio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* < PhotoPortfolio /> */}
  </StrictMode>,
)
