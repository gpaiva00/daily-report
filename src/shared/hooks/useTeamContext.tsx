import { useTeamsService } from '@/shared/services'
import { ReactElement, createContext, useContext, useEffect, useState } from 'react'

import { Team } from '@/shared/types'

interface Props {
  children: ReactElement
}

interface TeamContextProps {
  selectedTeam: Team | null | undefined
  userTeam: Team | null | undefined
  availableTeams: Team[] | null | undefined
  setSelectedTeam: React.Dispatch<React.SetStateAction<Team | null | undefined>>
}

const TeamContext = createContext({} as TeamContextProps)

function TeamProvider({ children }: Props) {
  const [selectedTeam, setSelectedTeam] = useState<Team | null | undefined>(null)
  const [userTeam, setUserTeam] = useState<Team | null | undefined>(null)
  const [availableTeams, setAvailableTeams] = useState<Team[] | null | undefined>([])

  const { userIsCurrentlyOnATeam, userTeam: userTeamService, listTeams } = useTeamsService()

  useEffect(() => {
    async function getCurrentTeam() {
      const _currentTeam = await userIsCurrentlyOnATeam()

      setSelectedTeam(_currentTeam)
    }

    getCurrentTeam()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    async function getUserTeam() {
      const _userTeam = await userTeamService()

      setUserTeam(_userTeam)
    }

    getUserTeam()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    async function getAvailableTeams() {
      const _availableTeams = await listTeams()

      setAvailableTeams(_availableTeams)
    }

    getAvailableTeams()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <TeamContext.Provider value={{ selectedTeam, userTeam, availableTeams, setSelectedTeam }}>
      {children}
    </TeamContext.Provider>
  )
}

function useTeamContext() {
  const context = useContext(TeamContext)

  return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { TeamProvider, useTeamContext }
