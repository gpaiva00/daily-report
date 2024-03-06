import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { z } from 'zod'

import { useTeamContext } from '@/shared/hooks/useTeamContext'
import { useTeamsService } from '@/shared/services'

import { CreateTeamFormProps } from '@/pages/Home/components/TeamsModal/CreateTeam'
import { useAuthContext } from '@/shared'
import { Team } from '@/shared/types'

const TEAM_ID_SIZE = 5

interface Props {
  toggleModal?: () => void
}

function useTeamsModal({ toggleModal }: Props) {
  const [randomID, setRandomID] = useState<string | undefined>()

  const { createTeam } = useTeamsService()
  const { setSelectedTeam, userTeam, availableTeams } = useTeamContext()

  const { user } = useAuthContext()

  useEffect(() => {
    setRandomID(nanoid(TEAM_ID_SIZE))

    return () => undefined
  }, [])

  async function handleCreateTeam({ name, password }: z.infer<CreateTeamFormProps>) {
    if (!user?.uid || !randomID) return

    const team: Team = {
      name,
      password,
      id: randomID,
      ownerId: user.uid,
    }

    await createTeam(team)

    setSelectedTeam(team)

    if (!toggleModal) return

    toggleModal()
  }

  return {
    availableTeams,
    randomID,
    userTeam,
    handleCreateTeam,
  }
}

export { useTeamsModal }
