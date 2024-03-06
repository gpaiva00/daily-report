import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  UserFirebase,
  auth,
  browserSessionPersistence,
  onAuthStateChanged,
  provider,
  setPersistence,
  signInWithPopup,
} from '@/shared/services'

import { HOME_ROUTE, SIGN_IN_ROUTE } from '@/constants'
import { generateUsername, getUserNameInitials } from '@/shared/utils'

import { User } from '@/shared/types'

interface UseAuthProps {
  isLogged: boolean
  isLoadingUser: boolean
  user: User | null
  signIn: () => void
  signOut: () => void
}

const AuthContext = createContext<UseAuthProps>({} as UseAuthProps)

interface AuthProviderProps {
  children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoadingUser, setIsLoadingUser] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleAuthStateChange)

    return () => unsubscribe()
  }, [])

  async function signIn() {
    setIsLoadingUser(true)

    try {
      await setPersistence(auth, browserSessionPersistence)
      const { user } = await signInWithPopup(auth, provider)

      setUser({
        ...user,
        initials: getUserNameInitials(user?.displayName),
        username: generateUsername(user.displayName),
      })

      setIsLogged(true)
      navigate(HOME_ROUTE)
    } catch (error) {
      console.error('Error trying to sign in:', error)
    } finally {
      setIsLoadingUser(false)
    }
  }

  async function signOut() {
    setIsLoadingUser(true)

    try {
      await signOut()
      setIsLogged(false)
      navigate(SIGN_IN_ROUTE)
    } catch (error) {
      console.error('Error trying to sign out:', error)
    } finally {
      setIsLoadingUser(false)
    }
  }

  async function handleAuthStateChange(user: UserFirebase | null) {
    if (user === null) return

    setIsLoadingUser(true)

    try {
      setUser({
        ...user,
        initials: getUserNameInitials(user?.displayName),
        username: generateUsername(user.displayName),
      })

      setIsLogged(true)
    } catch (error) {
      console.error('Error trying to sign in:', error)
    } finally {
      setIsLoadingUser(false)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        isLoadingUser,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuthContext() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuthContext }
