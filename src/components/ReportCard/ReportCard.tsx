import { Dot, Link } from '@phosphor-icons/react'
import { useReportCard } from '../../hooks'
import { ReportProps, UserProps } from '../../types'

interface ReportCardProps {
  report: ReportProps & {
    user: UserProps
  }
  handleCopyLink: (link: string) => void
}

function ReportCard({ report, handleCopyLink }: ReportCardProps) {
  const { forTodayTextRef, forNextDayTextRef, blocksTextRef, showReadMoreButton } = useReportCard()

  return (
    <article className="flex w-[700px] flex-col gap-4 rounded-md border border-zinc-200 p-6 shadow-sm shadow-zinc-300">
      <header className="flex items-center">
        <div className="flex flex-1 items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-zinc-300" />
          <div className="flex flex-col">
            <div className="flex items-center">
              <h4 className="font-semibold">{report.user.name}</h4>
              <Dot
                weight="bold"
                size={30}
                className="text-zinc-300"
              />
              <em className="text-sm font-normal not-italic text-zinc-400">Hoje às 12:30</em>
            </div>
            <em className="text-sm font-normal not-italic text-zinc-400">{report.user.username}</em>
          </div>
        </div>
        <button
          aria-label="copiar link"
          aria-describedby="copiar o link para a área de transferência"
          onClick={() => handleCopyLink(report.link)}
          className="rounded-full p-2 transition-colors hover:bg-zinc-200"
        >
          <Link
            size={20}
            weight="bold"
          />
        </button>
      </header>
      <div className="flex">
        <p className="flex flex-col gap-4 overflow-hidden">
          <p
            className="line-clamp-2"
            ref={forTodayTextRef}
          >
            <b>Para hoje:</b> {report.forToday}
          </p>
          <p
            className="line-clamp-2"
            ref={forNextDayTextRef}
          >
            <b>Para o dia seguinte:</b> {report.forNextDay}
          </p>
          <p
            className="line-clamp-2"
            ref={blocksTextRef}
          >
            {report.blocks.length > 0 && [<b>Impedimentos/Bloqueios:</b>, ' ', report.blocks]}
          </p>
        </p>
      </div>

      {showReadMoreButton && (
        <footer className="flex w-full">
          <button
            aria-label="ler mais"
            aria-describedby="ler o report por completo"
            className="text-primary w-full hover:underline"
          >
            Ler mais
          </button>
        </footer>
      )}
    </article>
  )
}

export default ReportCard
