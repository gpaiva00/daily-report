import { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from '../hooks'
// import { AuthProvider } from '../hooks/useAuth'

const DefaultProvider = ({ children }: { children?: ReactElement }) => {
  return (
    <>
      <AuthProvider>{children || <Outlet />}</AuthProvider>
    </>
  )
}

export { DefaultProvider }
