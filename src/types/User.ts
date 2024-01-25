import { UserFirebase } from '../services'

interface User extends UserFirebase {
  ref?: string
  username: string
}

export type { User }
