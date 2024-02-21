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
import { generateUsername } from '@/shared/utils'

import { User } from '@/types'

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
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const navigate = useNavigate()

  async function signIn() {
    setIsLoadingUser(true)

    try {
      await setPersistence(auth, browserSessionPersistence)
      const result = await signInWithPopup(auth, provider)

      // const credential = GoogleAuthProvider.credentialFromResult(result)
      // // TODO: save access token
      // const token = credential?.accessToken

      setUser({
        ...result.user,
        username: generateUsername(result.user.displayName),
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

  const handleAuthStateChange = async (user: UserFirebase | null) => {
    if (user === null) return

    setIsLoadingUser(true)

    try {
      setUser({
        ...user,
        username: generateUsername(user.displayName),
      })

      setIsLogged(true)
    } catch (error) {
      console.error('Error trying to sign in:', error)
    } finally {
      setIsLoadingUser(false)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, handleAuthStateChange)

    return () => unsubscribe()
  }, [])

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
