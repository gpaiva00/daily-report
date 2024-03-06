import { useTeamsModal } from '@/pages/Home/hooks'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar'
import { Button } from '@/shared/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card'

function SearchTeams() {
  const { availableTeams } = useTeamsModal({})

  return (
    <Card>
      <CardHeader>
        <CardTitle>Entre para um time</CardTitle>
        <CardDescription>Procure por um time para visualizar seus Reports.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* <Label className="">Nome ou ID do time</Label>
        <Input
          type="search"
          placeholder="Digite o nome ou ID do time..."
          className="mt-2"
        /> */}
        {!availableTeams?.length && <p className="w-full text-center text-muted-foreground">Nenhum time por aqui.</p>}
        {/* results list */}
        <div className="mt-6 flex max-h-20 flex-col gap-6 overflow-y-scroll">
          {availableTeams?.map(({ name, id, photoURL }) => {
            const teamImage =
              photoURL ??
              'https://api.dicebear.com/7.x/fun-emoji/svg?seed=Peanut&backgroundColor=059ff2,d84be5,d9915b,f6d594,fcbc34,71cf62'

            return (
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-1 items-center gap-4">
                  <Avatar>
                    <AvatarImage src={teamImage} />
                    <AvatarFallback>...</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium leading-none last:mt-0">{name}</p>
                    <p className="text-xs text-muted-foreground last:mt-0">@{id}</p>
                  </div>
                </div>
                <Button variant="secondary">Entrar</Button>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

export { SearchTeams }
