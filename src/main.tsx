import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { TooltipProvider } from '@/shared/components/ui/tooltip'
import { TeamProvider } from '@/shared/hooks/useTeamContext'

import { AppRoutes } from './routes'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TooltipProvider>
      <TeamProvider>
        <AppRoutes />
      </TeamProvider>
    </TooltipProvider>
  </StrictMode>
)
