import { useEffect, useState } from 'react'

import { Report } from '@/types'
import { useAuth } from '..'

function useReportCard(report: Report) {
  const [shouldShowDeleteButton, setShouldShowDeleteButton] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    if (user?.uid != report.user?.uid) return

    setShouldShowDeleteButton(true)
  }, [user?.uid, report.user?.uid])

  return {
    shouldShowDeleteButton,
  }
}

export { useReportCard }
