import { UserFirebase } from '../services'

interface User extends Pick<UserFirebase, 'displayName' | 'email' | 'photoURL' | 'uid'> {
  ref?: string
  initials: string
  username: string
}

export type { User }
