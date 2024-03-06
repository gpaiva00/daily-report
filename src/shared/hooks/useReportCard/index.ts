import { useEffect, useState } from 'react'

import { useAuthContext } from '@/shared/hooks'
import { Report } from '@/shared/types'

function useReportCard(report: Report) {
  const [shouldShowDeleteButton, setShouldShowDeleteButton] = useState(false)
  const { user } = useAuthContext()

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
