import { Link } from 'react-router-dom'

import { PRESENTATION_ROUTE, PROFILE_ROUTE } from '@/constants'
import { useApp, useModal } from '@/hooks'
import { copyToClipboard, getDateFromTimestamp } from '@/shared/utils'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

import { ReportCard } from '@/components'
import { CreateReportModal } from './components/CreateReportModal'

import { CalendarBlank, PencilSimple } from '@phosphor-icons/react'

function Home() {
  const { isModalOpen, toggleModal } = useModal()
  const {
    reports,
    handleCreateReport,
    handleDeleteReport,
    shouldDisableCreateButton,
    handleSelectedDateChange,
    selectedDate,
    user,
  } = useApp({ toggleModal })

  console.warn({ selectedDate })

  return (
    <>
      <CreateReportModal
        isOpen={isModalOpen}
        handleCancelModal={toggleModal}
        toggleModal={toggleModal}
        handleSubmit={handleCreateReport}
        isLoading={false}
      />

      <header className="flex w-full items-center justify-between px-24 pt-4">
        <Link
          to={PRESENTATION_ROUTE}
          className="font-Afacad scroll-m-20 text-2xl font-bold tracking-tight"
        >
          Daily Report
        </Link>

        <div className="flex items-center">
          <Popover>
            <PopoverTrigger>
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    aria-describedby="acessar calendário"
                    className="gap-2 capitalize"
                    variant="ghost"
                  >
                    <CalendarBlank weight="bold" />
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
                onClick={toggleModal}
                className="mx-8 gap-2"
                disabled={shouldDisableCreateButton}
              >
                <PencilSimple weight="bold" />
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
      <section className="flex h-screen flex-1 flex-col items-center overflow-y-scroll py-8">
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
