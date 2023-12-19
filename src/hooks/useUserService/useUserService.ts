import { DocumentReference, getDoc } from 'firebase/firestore'
import { User } from '../../types'

function useUserService() {
  // const usersDocumentName = import.meta.env.VITE_USERS_DOCUMENT_NAME as string

  // const usersCollection = collection(db, usersDocumentName)

  async function getUserFromReference(reference: DocumentReference) {
    const user = (await getDoc(reference)).data() as User

    return user
  }

  return {
    getUserFromReference,
  }
}

export { useUserService }
