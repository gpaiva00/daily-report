import { Trash } from 'lucide-react'

import { useReportCard } from '@/shared/hooks'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/shared/components/ui/alert-dialog'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar'
import { Button } from '@/shared/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card'

import { Report } from '@/shared/types'

interface ReportCardProps {
  report: Report
  handleCopyLink: (link: string) => void
  handleDeleteReport: (reportId: string) => void
}

function ReportCard({ report, handleDeleteReport }: ReportCardProps) {
  const { shouldShowDeleteButton, reportDataText } = useReportCard(report)

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
            <AlertDialog>
              <AlertDialogTrigger>
                <Button
                  aria-label="excluir report"
                  aria-describedby="excluir report"
                  variant="ghost"
                  size="icon"
                >
                  <Trash />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Apagar este Report?</AlertDialogTitle>
                  <AlertDialogDescription>Cuidado, esta ação não pode ser desfeita.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction onClick={() => handleDeleteReport(report.id)}>Sim, apagar</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        )}
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {reportDataText.map((reportData) => {
          if (!reportData.text) return <></>

          return (
            <div className="flex flex-col">
              <strong className="capitalize">{reportData.title}</strong>
              {/* className="line-clamp-2" */}
              <p className="last:mt-0">{reportData?.text}</p>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

export { ReportCard }
