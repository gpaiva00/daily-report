import { auth, db } from '@/shared/services'
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore'
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
      const listTeamsQuery = query(teamsCollection, where('ownerId', '!=', auth.currentUser?.uid ?? null))

      const docsResult = await getDocs(listTeamsQuery)

      if (!docsResult.docs.length) return null

      return docsResult.docs.map((doc) => doc.data()) as unknown as Team[]
    } catch (error) {
      console.error('listTeam', error)
    }
  }

  async function userTeam() {
    try {
      const userHasTeamQuery = query(teamsCollection, where('ownerId', '==', auth.currentUser?.uid ?? null))

      const docsResult = await getDocs(userHasTeamQuery)

      if (!docsResult.docs.length) return null

      return docsResult.docs.map((doc) => doc.data()) as unknown as Team
    } catch (error) {
      console.error('userTeam', error)
    }
  }

  // TODO: user can only be active in one team at a time. So when active one team, must inactive others
  async function userIsCurrentlyOnATeam() {
    try {
      const userIsCurrentlyOnATeamQuery = query(
        userTeamCollection,
        where('active', '==', true),
        // ! auth.currentUser is getting undefined
        where('userUid', '==', auth.currentUser?.uid ?? null)
      )

      const docsResult = await getDocs(userIsCurrentlyOnATeamQuery)

      const userIsOnATeam = !!docsResult.docs.length

      if (!userIsOnATeam) return null

      const userTeamData = docsResult.docs.map((doc) => doc.data())[0] as unknown as UserTeam

      const docRef = doc(db, 'teams', userTeamData.teamId)

      const docSnap = await getDoc(docRef)

      if (!docSnap.exists()) return null

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
