import { User } from './User'

interface Report {
  id: string
  user?: User
  ownerId: string | undefined
  link: string
  teamId: string | undefined
  forTodayText: string
  nextStepsText: string
  createdAt: number | string
  createdAtWithoutHours: number
  blocksText: string | undefined
}

export type { Report }
