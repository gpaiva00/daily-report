import { DocumentData, DocumentReference } from 'firebase/firestore'
import { User } from './User'

interface Report {
  forTodayText: string
  forNextDayText: string
  blocksText: string
  link: string
  user?: User
  userRef?: DocumentReference<DocumentData, DocumentData>
  createdAt: number | string
  createdAtWithoutHours: number
  id: string
}

export type { Report }
