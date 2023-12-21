import { Balloon, CalendarBlank, PencilSimple, User } from '@phosphor-icons/react'
import { CreateReportModal } from './components/CreateReportModal'
import { ReportCard } from './components/ReportCard'
import { useApp, useModal } from './hooks'
import { copyToClipboard } from './utils/copyToClipboard'

function App() {
  const { isModalOpen, toggleModal } = useModal()
  const { reports, handleCreateReport } = useApp({ toggleModal })

  return (
    <>
      <CreateReportModal
        isOpen={isModalOpen}
        toggleModal={toggleModal}
        handleCancelModal={() => null}
        handleSubmit={handleCreateReport}
        isLoading={false}
      />
      <main className="flex h-screen w-full flex-col">
        <header className="flex w-full items-center justify-between px-24 pt-8">
          <h1 className="text-center font-Afacad text-3xl font-bold">Daily Report</h1>
          <div className="flex items-center gap-8">
            <button
              aria-describedby="acessar calendário"
              className="flex items-center gap-2 rounded-md px-4 py-2 capitalize transition-colors hover:bg-zinc-200"
            >
              <CalendarBlank
                size={20}
                weight="bold"
              />
              Hoje
            </button>
            <button
              aria-label="criar report"
              onClick={toggleModal}
              className="flex items-center gap-2 rounded-md px-4 py-2 capitalize transition-colors hover:bg-zinc-200"
            >
              <PencilSimple
                size={20}
                weight="bold"
              />
              Criar
            </button>
            <button
              aria-label="menu de usuário"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-300"
            >
              <User weight="bold" />
            </button>
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
        <section className="flex h-screen flex-1 flex-col items-center gap-8 overflow-y-scroll pb-12 pt-8">
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
              handleDeleteReport={() => {}}
              report={report}
              key={report.id}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default App
