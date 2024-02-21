import { useEffect, useState } from 'react'

import { useAuth } from '@/shared/hooks'
import { Report } from '@/types'

function useReportCard(report: Report) {
  const [shouldShowDeleteButton, setShouldShowDeleteButton] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    if (user?.uid != report.user?.uid) return
    // TODO: should delete only today's posts
    setShouldShowDeleteButton(true)
  }, [user?.uid, report.user?.uid])

  const reportDataText = [
    {
      title: 'para hoje',
      text: report.forTodayText,
    },
    {
      title: 'próximos passos',
      text: report.nextStepsText,
    },
    {
      title: 'bloqueios ou impedimentos',
      text: report?.blocksText,
    },
  ]

  return {
    reportDataText,
    shouldShowDeleteButton,
  }
}

export { useReportCard }
