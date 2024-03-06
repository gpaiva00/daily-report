'use client'

import { useTeamsModal } from '@/pages/Home/hooks'

import { CreateTeam } from '@/pages/Home/components/TeamsModal/CreateTeam'
import { MyTeam } from '@/pages/Home/components/TeamsModal/MyTeam'
import { SearchTeams } from '@/pages/Home/components/TeamsModal/SearchTeams'
import { Dialog, DialogContent, DialogHeader } from '@/shared/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components/ui/tabs'

interface Props {
  isOpen: boolean
  toggleModal: () => void
}

function TeamsModal({ isOpen, toggleModal }: Props) {
  const { handleCreateTeam, randomID, userTeam } = useTeamsModal({ toggleModal })

  return (
    <Dialog
      open={isOpen}
      modal
      onOpenChange={toggleModal}
    >
      <DialogContent>
        <Tabs
          defaultValue="search"
          className="mt-6 w-full"
        >
          <DialogHeader>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger
                value="search"
                className="capitalize"
              >
                procurar times
              </TabsTrigger>
              {userTeam ? (
                <TabsTrigger
                  value="myTeam"
                  className="capitalize"
                >
                  meu time
                </TabsTrigger>
              ) : (
                <TabsTrigger
                  value="create"
                  className="capitalize"
                >
                  criar time
                </TabsTrigger>
              )}
            </TabsList>
          </DialogHeader>
          <TabsContent value="search">
            <SearchTeams />
          </TabsContent>
          <TabsContent value="create">
            <CreateTeam
              randomID={randomID}
              handleCreateTeam={handleCreateTeam}
            />
          </TabsContent>
          <TabsContent value="myTeam">
            <MyTeam />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

export { TeamsModal }
