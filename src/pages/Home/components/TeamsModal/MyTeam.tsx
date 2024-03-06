import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar'
import { Button } from '@/shared/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card'
import classnames from 'classnames'

import { useTeamContext } from '@/shared/hooks/useTeamContext'

import { User } from '@/shared/types'

import { Check, X } from 'lucide-react'

function MyTeam() {
  // const members = []
  const members: User[] = [
    {
      displayName: 'Gabriel Paiva',
      email: 'gabriel.paiva@icloud.com',
      initials: 'GP',
      photoURL: 'https://github.com/gpaiva00.png',
      uid: '123',
      username: 'gpaiva',
    },
  ]

  const requests: User[] = [
    {
      displayName: 'John Apple',
      email: 'john@icloud.com',
      initials: 'JA',
      photoURL: null,
      uid: '123',
      username: 'gpaiva',
    },
  ]

  const { userTeam } = useTeamContext()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{userTeam?.name ?? '...'}</CardTitle>
        <CardDescription>Gerencie os membros e os nomes do seu time.</CardDescription>
      </CardHeader>
      <CardContent>
        {requests.length && <p className="text-muted-foreground">Solicitações para entrar no time</p>}

        {requests.map(({ displayName, photoURL, initials, username }) => (
          <div className="mt-4 flex w-full items-center justify-between">
            <div className="flex flex-1 items-center gap-4">
              <Avatar>
                <AvatarImage src={photoURL} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm font-medium leading-none last:mt-0">{displayName}</p>
                <p className="text-xs text-muted-foreground last:mt-0">@{username}</p>
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
            >
              <X />
            </Button>
            <Button
              size="sm"
              className="ml-2"
            >
              <Check />
            </Button>
          </div>
        ))}

        {!members?.length && <p className="w-full text-center text-muted-foreground">Seu time está vazio.</p>}
        {members.length && (
          <p
            className={classnames('text-muted-foreground', {
              'mt-4': !!requests.length,
            })}
          >
            Membros do time
          </p>
        )}

        {members.map(({ displayName, photoURL, initials, username }) => (
          <div className="mt-4 flex w-full items-center justify-between">
            <div className="flex flex-1 items-center gap-4">
              <Avatar>
                <AvatarImage src={photoURL} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm font-medium leading-none last:mt-0">{displayName}</p>
                <p className="text-xs text-muted-foreground last:mt-0">@{username}</p>
              </div>
            </div>
            <Button
              variant="secondary"
              size="sm"
            >
              <X />
            </Button>
          </div>
        ))}
      </CardContent>
      <CardFooter className="pt-10">
        <Button
          className="w-full"
          variant="destructive"
        >
          Apagar time
        </Button>
      </CardFooter>
    </Card>
  )
}

export { MyTeam }
