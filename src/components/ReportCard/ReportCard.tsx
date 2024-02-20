import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Trash } from 'lucide-react'
import { useReportCard } from '../../hooks'
import { Report } from '../../types'

interface ReportCardProps {
  report: Report
  handleCopyLink: (link: string) => void
  handleDeleteReport: (reportId: string) => void
}

function ReportCard({ report, handleDeleteReport }: ReportCardProps) {
  const { shouldShowDeleteButton } = useReportCard(report)

  return (
    <Card className="w-[750px]">
      <CardHeader className="flex-1 flex-row items-center gap-2">
        <Avatar>
          <AvatarImage src={report.user?.photoURL || ''} />
          <AvatarFallback>{report.user?.username}</AvatarFallback>
        </Avatar>
        {/* user infos */}
        <CardTitle className="text-lg">{report?.user?.displayName}</CardTitle>
        <CardDescription>@{report?.user?.username}</CardDescription>
        <span className="text-2xl text-gray-400">{'·'}</span>
        <CardDescription>{report.createdAt}</CardDescription>

        {shouldShowDeleteButton && (
          <div className="flex flex-1 justify-end">
            <Button
              aria-label="excluir report"
              aria-describedby="excluir report"
              onClick={() => handleDeleteReport(report.id)}
              variant="ghost"
              size="icon"
            >
              <Trash />
            </Button>
          </div>
        )}
        {/* </div> */}
      </CardHeader>

      <CardContent>
        <p
        // className="line-clamp-2"
        >
          <Label>Para hoje - </Label> {report?.forTodayText}
        </p>
        <p>
          <Label>Para o dia seguinte - </Label> {report.forNextDayText}
        </p>
        <p>
          {report?.blocksText &&
            report.blocksText.length > 0 && [<Label>Bloqueios ou impedimentos - </Label>, ' ', report.blocksText]}
        </p>
      </CardContent>
    </Card>
  )
}

export default ReportCard
