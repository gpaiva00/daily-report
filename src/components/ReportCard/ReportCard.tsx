import { TrashSimple } from '@phosphor-icons/react'
import classNames from 'classnames'
import { useReportCard } from '../../hooks'
import { Report } from '../../types'

interface ReportCardProps {
  report: Report
  handleCopyLink: (link: string) => void
  handleDeleteReport: (reportId: string) => void
}

function ReportCard({ report, handleDeleteReport }: ReportCardProps) {
  const { forTodayTextRef, forNextDayTextRef, blocksTextRef, shouldShowDeleteButton } = useReportCard(report)

  return (
    <article
      className={classNames('flex w-[750px] gap-6 border-zinc-200 p-6', {
        'border-b': true,
      })}
    >
      <img
        src={report.user?.photoURL || ''}
        className="h-14 w-14 rounded-full"
      />
      <div className="flex flex-1 flex-col gap-2">
        {/* user infos */}
        <div className="flex items-center gap-2">
          <h4 className="text-lg">{report?.user?.displayName}</h4>
          <em className="font-normal not-italic text-gray-400">@{report?.user?.username}</em>
          <span className="text-2xl text-gray-400">{'·'}</span>
          <em className="font-normal not-italic text-gray-400">{report.createdAt}</em>

          {shouldShowDeleteButton && (
            <div className="flex flex-1 justify-end">
              <button
                aria-label="excluir report"
                aria-describedby="excluir report"
                onClick={() => handleDeleteReport(report.id)}
                className="rounded-full p-2 transition-colors hover:bg-zinc-200"
              >
                <TrashSimple
                  size={20}
                  weight="bold"
                />
              </button>
            </div>
          )}
        </div>
        {/* report texts */}
        <div className="flex">
          <p className="flex flex-col gap-4 overflow-hidden">
            <p
              // className="line-clamp-2"
              ref={forTodayTextRef}
            >
              <em className="font-semibold not-italic">Para hoje:</em> {report?.forTodayText}
            </p>
            <p
              // className="line-clamp-2"
              ref={forNextDayTextRef}
            >
              <em className="font-semibold not-italic">Para o dia seguinte:</em> {report.forNextDayText}
            </p>
            <p
              // className="line-clamp-2"
              ref={blocksTextRef}
            >
              {report?.blocksText &&
                report.blocksText.length > 0 && [
                  <em className="font-semibold not-italic">Impedimentos/Bloqueios:</em>,
                  ' ',
                  report.blocksText,
                ]}
            </p>
          </p>
        </div>

        {/* {showReadMoreButton && (
          <footer className="flex w-full items-center justify-center">
            <button
              aria-label="ler mais"
              aria-describedby="ler o report por completo"
              className="w-full text-primary hover:underline"
            >
              Ler mais
            </button>
          </footer>
        )} */}
      </div>
      {/* <button
          aria-label="copiar link"
          aria-describedby="copiar o link para a área de transferência"
          onClick={() => handleCopyLink(report.link)}
          className="rounded-full p-2 transition-colors hover:bg-zinc-200"
        >
          <Link
            size={DEFAULT_ICON_SIZE}
            weight="bold"
          />
        </button> */}
    </article>
  )
}

export default ReportCard
