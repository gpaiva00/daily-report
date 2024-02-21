import { Outlet } from 'react-router-dom'

// import { SIGN_IN_ROUTE } from '../constants'
import { useAuth } from '@/shared/hooks'

const PrivateRouter = () => {
  const { isLoadingUser, isLogged } = useAuth()

  if (isLoadingUser) return <p className="dark:text-darkTextLight text-lg">Carregando...</p>

  // if (!isLogged) return <Navigate to={SIGN_IN_ROUTE} />

  return <Outlet />
}

export { PrivateRouter }
