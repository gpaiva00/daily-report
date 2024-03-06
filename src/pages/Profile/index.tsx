import { useNavigate } from 'react-router-dom'

import { useAuthContext } from '@/shared/hooks'

import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar'
import { Button } from '@/shared/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { ArrowLeft, Power } from 'lucide-react'

function Profile() {
  // TODO: create useProfile hook
  const { user, signOut, isLoadingUser } = useAuthContext()
  const navigate = useNavigate()

  function handleGoBack() {
    return navigate(-1)
  }

  return (
    <>
      <header className="flex w-full items-center justify-between px-24 pt-4">
        <Button
          aria-label="cancelar"
          onClick={handleGoBack}
          variant="secondary"
          className="gap-2"
        >
          <ArrowLeft />
          Voltar
        </Button>
      </header>
      <section className="flex flex-1 items-center justify-center">
        <Card className="h-fit w-[750px]">
          <CardHeader className="items-center justify-center">
            <Avatar className="h-48 w-48">
              <AvatarImage src={user?.photoURL ?? ''} />
              <AvatarFallback>{user?.displayName}</AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <CardTitle>{user?.displayName}</CardTitle>
            <CardDescription>@{user?.username}</CardDescription>
          </CardContent>
          <CardFooter className="justify-center">
            <Button
              onClick={signOut}
              disabled={isLoadingUser}
              variant="destructive"
              size="lg"
              className="gap-2"
            >
              <Power />
              Sair
            </Button>
          </CardFooter>
        </Card>
      </section>
    </>
  )
}

export { Profile }
