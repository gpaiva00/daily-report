import { DocumentReference } from 'firebase/firestore'
import { User } from './User'

interface Report {
  forTodayText: string
  forNextDayText: string
  blocksText: string
  link: string
  user?: User
  userRef: DocumentReference
  createdAt: number | string
  id: string
}

export type { Report }
