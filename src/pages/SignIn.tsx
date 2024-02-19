import { useAuth } from '@hooks'

import GoogleLogo from '@assets/google-logo.png'

function SignIn() {
  const { signIn, isLoadingUser } = useAuth()

  return (
    <main className="flex h-screen w-full flex-1 flex-col items-center justify-center gap-4">
      <h1 className="text-center font-Afacad text-6xl font-bold">Daily Report</h1>
      <h1 className="text-xl">Vamos lá? Faça login com sua conta Google.</h1>

      <div className="mt-8 flex w-80 flex-col gap-4">
        <button
          aria-label="fazer login com e-mail"
          onClick={signIn}
          disabled={isLoadingUser}
          className="flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 capitalize text-white transition-colors hover:bg-primary-darken disabled:opacity-30"
        >
          <img
            className="mr-4 h-4 w-4"
            src={GoogleLogo}
            alt="Google icon"
          />
          Entrar com Google
        </button>
      </div>
    </main>
  )
}

export default SignIn
