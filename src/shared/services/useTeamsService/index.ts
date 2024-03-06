import { auth, db } from '@/shared/services'
import { and, collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { z } from 'zod'

import { CreateTeamFormProps } from '@/pages/Home/components/TeamsModal/CreateTeam'

import { Team, UserTeam } from '@/shared/types'

const teamsDocumentsName = import.meta.env.VITE_TEAMS_DOCUMENT_NAME
const userTeamDocumentsName = import.meta.env.VITE_USER_TEAM_DOCUMENT_NAME

const teamsCollection = collection(db, teamsDocumentsName)
const userTeamCollection = collection(db, userTeamDocumentsName)

function useTeamsService() {
  // const { user } = useAuthContext()

  async function createTeam(team: z.infer<CreateTeamFormProps>) {
    try {
      await setDoc(doc(db, teamsDocumentsName, team.id!), {
        ...team,
        ownerId: auth.currentUser?.uid,
      })
    } catch (error) {
      console.error('createTeam', error)
    }
  }

  async function listTeams() {
    try {
      return (await getDocs(teamsCollection)).docs
        .map((doc) => doc.data() as Team)
        .filter((team) => team.ownerId !== auth.currentUser?.uid)
    } catch (error) {
      console.error('listTeam', error)
    }
  }

  async function userTeam() {
    // if (!user) return

    const userHasTeamQuery = query(teamsCollection, where('ownerId', '==', auth.currentUser?.uid))

    try {
      const docsResult = await getDocs(userHasTeamQuery)

      if (!docsResult.docs.length) return null

      return docsResult.docs.map((doc) => doc.data()) as unknown as Team
    } catch (error) {
      console.error('userTeam', error)
    }
  }

  // TODO: user can only be active in one team at a time. So when active one team, must inactive others
  async function userIsCurrentlyOnATeam() {
    // if (!user) return

    const userIsCurrentlyOnATeamQuery = query(
      userTeamCollection,
      and(where('active', '==', 'true'), where('userUid', '==', auth.currentUser?.uid))
    )

    try {
      const docsResult = await getDocs(userIsCurrentlyOnATeamQuery)
      const userIsOnATeam = !!docsResult.docs.length

      if (!userIsOnATeam) return null

      const userTeamData = docsResult.docs.map((doc) => doc.data()) as unknown as UserTeam

      const docRef = doc(db, 'teams', userTeamData.teamId)

      const docSnap = await getDoc(docRef)

      if (!docSnap.exists()) return

      return docSnap.data() as Team
    } catch (error) {
      console.error('userIsOnATeam', error)
    }
  }

  async function enterTeam() {}

  return {
    listTeams,
    createTeam,
    userTeam,
    enterTeam,
    userIsCurrentlyOnATeam,
  }
}

export { useTeamsService }
