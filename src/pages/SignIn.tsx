import { useAuth } from '@/hooks'

import { Button } from '@/components/ui/button'

import GoogleLogo from '@/assets/google-logo.png'

function SignIn() {
  const { signIn, isLoadingUser } = useAuth()

  return (
    <main className="flex h-screen w-full flex-1 flex-col items-center justify-center gap-4">
      <h1 className="font-Afacad text-center text-6xl font-bold">Daily Report</h1>
      <h4 className="text-zinc-600">Vamos lá? Faça login com sua conta Google.</h4>

      <div className="mt-8 flex w-80 flex-col gap-4">
        <Button
          aria-label="fazer login com e-mail"
          onClick={signIn}
          disabled={isLoadingUser}
        >
          <img
            className="mr-4 h-4 w-4"
            src={GoogleLogo}
            alt="Google icon"
          />
          Entrar com Google
        </Button>
      </div>
    </main>
  )
}

export default SignIn
