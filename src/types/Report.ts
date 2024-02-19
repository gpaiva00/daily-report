import { User } from './User'

interface Report {
  forTodayText: string
  forNextDayText: string
  blocksText: string
  link: string
  user: User | null
  userUid?: string
  createdAt: number | string
  createdAtWithoutHours: number
  id: string
}

export type { Report }
