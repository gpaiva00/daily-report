import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'

import { AppRoutes } from './routes'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
    <Toaster
      toastOptions={{
        style: {
          background: '#000',
          color: '#fff',
        },
      }}
    />
  </StrictMode>
)
