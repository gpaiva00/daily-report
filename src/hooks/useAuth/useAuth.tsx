import { ReactNode, createContext, useContext, useState } from 'react'

import { User } from '../../types'

interface UseAuthProps {
  isLogged: boolean
  isLoadingUser: boolean
  user: User | null
  signIn: () => void
  signOut: () => void
}

const authContext = createContext<UseAuthProps>({} as UseAuthProps)

interface AuthProviderProps {
  children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoadingUser, setIsLoadingUser] = useState(false)
  const [isLogged, setIsLogged] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  // const navigate = useNavigate()

  const signIn = () => {}

  const signOut = () => {}

  // const signInFallback = async (user: UserFirebase | null) => {}

  // const authStateChangedFallback = async (user: UserFirebase | null) => {}

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(authStateChangedFallback)

  //   return () => unsubscribe()
  // }, [])

  return (
    <authContext.Provider
      value={{
        isLogged,
        isLoadingUser,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </authContext.Provider>
  )
}

function useAuth() {
  const context = useContext(authContext)

  return context
}

export { AuthProvider, useAuth }
