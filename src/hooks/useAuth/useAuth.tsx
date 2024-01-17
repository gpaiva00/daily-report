import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import { EMAIL_KEY } from '../../constants'
import { actionCodeSettings, auth, sendSignInLinkToEmail } from '../../services'
import { User } from '../../types'
import { setToStorage } from '../../utils'

interface UseAuthProps {
  isLogged: boolean
  isLoadingUser: boolean
  user: User | null
  signIn: (email: string) => void
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

  useEffect(() => {
    setUser(() => ({
      ref: 'POGY5djICPewSxuuK12H',
      email: 'papaiva@gmail.com',
      name: 'Gabriel Paiva',
      password: '123',
      photoUrl: 'https://github.com/gpaiva00.png',
      username: 'papaiva',
    }))
  }, [])

  async function signIn(email: string) {
    setIsLoadingUser(true)

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      setToStorage(EMAIL_KEY, email)
      setIsLogged(true)

      console.warn('Sign In Successful')
    } catch (error) {
      console.error('Error trying to sign in:', error)
    } finally {
      setIsLoadingUser(false)
    }
  }

  function signOut() {
    console.log('Sign Out required')
  }

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
