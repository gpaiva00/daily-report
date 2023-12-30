import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import { AppRoutes } from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
    <Toaster
      toastOptions={{
        style: {
          background: '#000',
          color: '#fff',
        },
      }}
    />
  </React.StrictMode>
)
