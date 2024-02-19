import { useNavigate } from 'react-router-dom'

import { DEFAULT_ICON_SIZE } from '@constants'
import { useAuth } from '@hooks'

import { ArrowLeft, Power } from '@phosphor-icons/react'

function Profile() {
  const { user, signOut, isLoadingUser } = useAuth()
  const navigate = useNavigate()

  function handleGoBack() {
    return navigate(-1)
  }

  return (
    <>
      <header className="flex w-full items-center justify-between px-24 pt-4">
        <button
          aria-label="cancelar"
          onClick={handleGoBack}
          className="flex items-center gap-2 rounded-md border border-zinc-300 px-6 py-3 capitalize transition-colors hover:border-zinc-200 hover:bg-zinc-200"
        >
          <ArrowLeft size={DEFAULT_ICON_SIZE} />
          Voltar
        </button>
      </header>
      <main className="flex h-screen w-full flex-1 flex-col items-center justify-center gap-8">
        <img
          src={user?.photoURL ?? ''}
          className="w-48 rounded-full"
        />
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-3xl font-extrabold">{user?.displayName}</h1>
          <em className="text-xl font-normal not-italic text-gray-400">@{user?.username}</em>
        </div>
        <button
          onClick={signOut}
          disabled={isLoadingUser}
          className="flex items-center gap-2 rounded-md bg-red-500 px-6 py-3 text-white transition-colors hover:bg-red-600 disabled:opacity-30"
        >
          <Power size={DEFAULT_ICON_SIZE} />
          Sair
        </button>
      </main>
    </>
  )
}

export default Profile
