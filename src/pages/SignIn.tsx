import { Link } from 'react-router-dom'
import GoogleLogo from '../assets/google-logo.png'
import { PRESENTATION_ROUTE } from '../constants'

function SignIn() {
  return (
    <main className="flex h-screen w-full flex-1 flex-col items-center justify-center gap-8">
      <Link
        to={PRESENTATION_ROUTE}
        className="text-center font-Afacad text-6xl font-bold"
      >
        Daily Report
      </Link>
      <h1 className="text-xl">Vamos lá?</h1>

      <button className="flex items-center gap-4 rounded-md bg-[#1b73e8] px-6 py-3 text-white transition-colors hover:bg-[#1b73e8]/90">
        <img
          className="h-5 w-5"
          src={GoogleLogo}
          alt="Google icon"
        />
        Entrar com Google
      </button>
    </main>
  )
}

export default SignIn
