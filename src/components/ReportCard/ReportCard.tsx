import { Link } from '@phosphor-icons/react'
import { useReportCard } from '../../hooks'
import { Report } from '../../types'

interface ReportCardProps {
  report: Report
  handleCopyLink: (link: string) => void
}

function ReportCard({ report, handleCopyLink }: ReportCardProps) {
  const { forTodayTextRef, forNextDayTextRef, blocksTextRef, showReadMoreButton } = useReportCard()

  return (
    <article className="flex w-[700px] flex-col gap-4 rounded-md border border-zinc-200 p-6 shadow-sm shadow-zinc-300">
      <header className="flex items-center">
        <div className="flex flex-1 items-center gap-4">
          <img
            src={report.user?.photoUrl || ''}
            className="h-14 w-14 rounded-full"
          />
          <div className="flex items-center gap-2">
            <h4 className="text-lg font-bold">{report?.user?.name}</h4>
            <em className="font-normal not-italic text-gray-500/60">@{report?.user?.username}</em>
            <span className="text-2xl text-gray-400">{'·'}</span>
            <em className="font-normal not-italic text-gray-500/60">{report.createdAt}</em>
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
            <b>Para hoje:</b> {report?.forTodayText}
          </p>
          <p
            className="line-clamp-2"
            ref={forNextDayTextRef}
          >
            <b>Para o dia seguinte:</b> {report.forNextDayText}
          </p>
          <p
            className="line-clamp-2"
            ref={blocksTextRef}
          >
            {report?.blocksText &&
              report.blocksText.length > 0 && [<b>Impedimentos/Bloqueios:</b>, ' ', report.blocksText]}
          </p>
        </p>
      </div>

      {showReadMoreButton && (
        <footer className="flex w-full items-center justify-center">
          <button
            aria-label="ler mais"
            aria-describedby="ler o report por completo"
            className="w-full text-primary hover:underline"
          >
            Ler mais
          </button>
        </footer>
      )}
    </article>
  )
}

export default ReportCard
