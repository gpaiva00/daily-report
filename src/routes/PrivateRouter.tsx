import { Navigate, Outlet } from 'react-router-dom'

import { SIGN_IN_ROUTE } from '../constants'

const PrivateRouter = () => {
  // const { isLoadingUser, isLogged } = useAuth()
  const isLogged = true
  const isLoadingUser = false

  if (isLoadingUser) return <p className="dark:text-darkTextLight text-lg">Carregando...</p>

  if (!isLogged) return <Navigate to={SIGN_IN_ROUTE} />

  return <Outlet />
}

export { PrivateRouter }
