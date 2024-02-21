import { User } from './User'

interface Report {
  forTodayText: string
  nextStepsText: string
  blocksText: string | undefined
  link: string
  user: User | null
  userUid?: string
  createdAt: number | string
  createdAtWithoutHours: number
  id: string
}

export type { Report }
