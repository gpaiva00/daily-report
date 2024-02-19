import { UserFirebase } from '../services'

interface User extends Pick<UserFirebase, 'displayName' | 'email' | 'photoURL' | 'uid'> {
  ref?: string
  username: string
}

export type { User }
