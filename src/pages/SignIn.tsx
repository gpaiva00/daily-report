import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PRESENTATION_ROUTE } from '../constants'
import { useAuth } from '../hooks'

function SignIn() {
  const [email, setEmail] = useState('')
  const { signIn, isLoadingUser } = useAuth()

  return (
    <main className="flex h-screen w-full flex-1 flex-col items-center justify-center gap-4">
      <Link
        to={PRESENTATION_ROUTE}
        className="text-center font-Afacad text-6xl font-bold"
      >
        Daily Report
      </Link>
      <h1 className="text-xl">Vamos lá? Faça login com o seu e-mail.</h1>

      <div className="mt-8 flex w-80 flex-col gap-4">
        <input
          className="w-full rounded-md border border-zinc-200 px-4 py-3"
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          aria-label="fazer login com e-mail"
          onClick={() => signIn(email)}
          disabled={isLoadingUser}
          className="w-full rounded-md bg-primary px-6 py-3 capitalize text-white transition-colors hover:bg-primary-darken disabled:opacity-30 group-invalid:pointer-events-none group-invalid:opacity-30"
        >
          Criar
        </button>
      </div>
    </main>
  )
}

export default SignIn
