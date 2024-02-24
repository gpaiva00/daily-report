import { CalendarIcon, Pencil, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'

import { PRESENTATION_ROUTE, PROFILE_ROUTE } from '@/constants'
import { useModal } from '@/shared/hooks'
import { copyToClipboard, getDateFromTimestamp } from '@/shared/utils'
import { useHome } from './useHome'

import { ReportCard } from '@/shared/components'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar'
import { Button } from '@/shared/components/ui/button'
import { Calendar } from '@/shared/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/components/ui/popover'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/shared/components/ui/tooltip'
import { CreateReportModal, TeamsModal } from './components'

function Home() {
  const { isOpen: isCreateReportModalOpen, toggleModal: toggleCreateReportModal } = useModal()
  const { isOpen: isTeamsModalOpen, toggleModal: toggleTeamsModal } = useModal()

  const {
    reports,
    handleCreateReport,
    handleDeleteReport,
    shouldDisableCreateButton,
    handleSelectedDateChange,
    selectedDate,
    user,
  } = useHome({ toggleModal: toggleCreateReportModal })

  return (
    <>
      <CreateReportModal
        isOpen={isCreateReportModalOpen}
        toggleModal={toggleCreateReportModal}
        handleSubmit={handleCreateReport}
        isLoading={false}
      />

      <TeamsModal
        isOpen={isTeamsModalOpen}
        toggleModal={toggleTeamsModal}
      />

      <header className="flex w-full items-center justify-between px-24 pt-4">
        <Link
          to={PRESENTATION_ROUTE}
          className="font-Afacad scroll-m-20 text-2xl font-bold capitalize tracking-tight"
        >
          Daily Report
        </Link>

        <div className="flex items-center">
          <Tooltip>
            <TooltipTrigger>
              <Button
                aria-label="opções de times"
                variant="ghost"
                onClick={toggleTeamsModal}
                className="mx-8 gap-2"
                disabled={false}
              >
                <UsersRound />
                Times
              </Button>
            </TooltipTrigger>
            <TooltipContent>Criar ou procurar times</TooltipContent>
          </Tooltip>
          <Popover>
            <PopoverTrigger>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    aria-describedby="acessar calendário"
                    className="gap-2"
                    variant="ghost"
                  >
                    <CalendarIcon />
                    {getDateFromTimestamp(selectedDate)}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Alterar data de visualização</TooltipContent>
              </Tooltip>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleSelectedDateChange}
                disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Tooltip>
            <TooltipTrigger>
              <Button
                aria-label="criar report"
                variant="ghost"
                onClick={toggleCreateReportModal}
                className="mx-8 gap-2"
                disabled={shouldDisableCreateButton}
              >
                <Pencil />
                Criar
              </Button>
            </TooltipTrigger>
            <TooltipContent>Criar um Report</TooltipContent>
          </Tooltip>
          <Link
            to={PROFILE_ROUTE}
            aria-label="menu de usuário"
          >
            <Avatar>
              <AvatarImage src={user?.photoURL || ''} />
              <AvatarFallback>{user.initials}</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </header>

      {/* {getReportsLoading && (
          <div className="flex h-full w-full items-center justify-center">
            <CircleNotch
              size={40}
              className="animate-spin text-black"
            />
          </div>
        )} */}
      <section className="mt-10 flex h-screen flex-1 flex-col items-center gap-4 overflow-y-scroll py-8">
        {!reports.length && (
          <div className="flex h-full items-center justify-center">
            <p className="muted">Ops, não há reports por aqui.</p>
          </div>
        )}
        {reports.map((report) => (
          <ReportCard
            handleCopyLink={() => copyToClipboard(report.link)}
            handleDeleteReport={handleDeleteReport}
            report={report}
            key={report.id}
          />
        ))}
      </section>
    </>
  )
}

export default Home
