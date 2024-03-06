type TeamRole = 'member' | 'owner' | 'banned'

interface UserTeam {
  userUid: string
  teamId: string
  role: TeamRole
  active: boolean
}

export type { TeamRole, UserTeam }
