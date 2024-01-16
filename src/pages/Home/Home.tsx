import { Balloon, CalendarBlank, PencilSimple } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { DEFAULT_ICON_SIZE, PRESENTATION_ROUTE, PROFILE_ROUTE } from '../../constants'
import { useApp, useAuth, useModal } from '../../hooks'
import { copyToClipboard } from '../../utils/copyToClipboard'

import { ReportCard } from '../../components/ReportCard'
import { CreateReportModal } from './components/CreateReportModal'

function Home() {
  const { isModalOpen, toggleModal } = useModal()
  const { reports, handleCreateReport, handleDeleteReport, shouldDisableCreateButton } = useApp({ toggleModal })
  const { user } = useAuth()

  return (
    <>
      <CreateReportModal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        handleCancelModal={() => null}
        handleSubmit={handleCreateReport}
        isLoading={false}
      />
      <header className="flex w-full items-center justify-between px-24 pt-4">
        <Link
          to={PRESENTATION_ROUTE}
          className="text-center font-Afacad text-3xl font-bold"
        >
          Daily Report
        </Link>
        <div className="flex items-center gap-8">
          <button
            aria-describedby="acessar calendário"
            className="flex items-center justify-center rounded-full p-4 transition-colors hover:bg-zinc-200"
          >
            <CalendarBlank
              size={DEFAULT_ICON_SIZE}
              weight="bold"
            />
          </button>
          <button
            aria-label="criar report"
            onClick={toggleModal}
            className="flex items-center justify-center rounded-full p-4 transition-colors enabled:hover:bg-zinc-200 disabled:text-zinc-300"
            disabled={shouldDisableCreateButton}
          >
            <PencilSimple
              size={DEFAULT_ICON_SIZE}
              weight="bold"
            />
          </button>
          <Link
            to={PROFILE_ROUTE}
            aria-label="menu de usuário"
            className="flex items-center justify-center rounded-full p-1 transition-colors hover:bg-zinc-200"
          >
            <img
              src={user?.photoUrl}
              className="w-14 rounded-full"
            />
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
      <section className="flex h-screen flex-1 flex-col items-center gap-8 overflow-y-scroll py-8">
        {!reports.length && (
          <div className="flex h-full flex-col items-center justify-center gap-4">
            <p className="text-zinc-500">Ainda não há reports por aqui.</p>
            <Balloon
              size={56}
              weight="light"
              className="rotate-12 text-zinc-400"
            />
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
