import { auth } from '@services'

function useUserService() {
  // const usersDocumentName = import.meta.env.VITE_USERS_DOCUMENT_NAME as string

  // const usersCollection = collection(db, usersDocumentName)

  async function getUserFromReference(userUid: string) {
    const user = await auth.getUser(userUid)
    console.warn({ user })

    return user
  }

  return {
    getUserFromReference,
  }
}

export { useUserService }
