import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { TooltipProvider } from '@/components/ui/tooltip'

import { AppRoutes } from './routes'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TooltipProvider>
      <AppRoutes />
    </TooltipProvider>
  </StrictMode>
)
