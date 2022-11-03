import './assets/tailwind.css';
import { StrictMode } from 'react'
import { AppSetup } from './AppSetup'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <AppSetup />
  </StrictMode>
)
