import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { GoogleAuthProvider, auth, provider, signInWithPopup } from '../../services/firebase'

import { HOME_ROUTE } from '../../constants'
import { generateUsername } from '../../utils'

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
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const navigate = useNavigate()

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

  async function signIn() {
    setIsLoadingUser(true)

    try {
      const result = await signInWithPopup(auth, provider)

      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      // TODO: save access token
      const token = credential?.accessToken

      const { email, displayName, photoURL, refreshToken } = result.user

      setUser({
        email,
        name: displayName,
        photoUrl: photoURL,
        username: generateUsername(displayName),
      })

      console.warn({ user, token })

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
    } catch (error) {
      console.error('Error trying to sign out:', error)
    } finally {
      setIsLoadingUser(false)
    }
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
