import { DocumentReference, doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../services'

import { User } from '../../types'

function useUserService() {
  const usersDocumentName = import.meta.env.VITE_USERS_DOCUMENT_NAME as string

  // const usersCollection = collection(db, usersDocumentName)

  async function getUserFromReference(reference: DocumentReference) {
    const user = (await getDoc(reference)).data() as User

    return user
  }

  async function createUser(user: User) {
    try {
      await setDoc(doc(db, usersDocumentName, user.username), user)
    } catch (error) {
      console.error('Error trying to create user:', error)
    }
  }

  return {
    getUserFromReference,
    createUser,
  }
}

export { useUserService }
