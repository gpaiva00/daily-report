import { useState } from 'react'
import { ReportProps, UserProps } from '../../types'

interface ReportsProps extends ReportProps {
  user: UserProps
}

function useAppService() {
  const [reports, setReports] = useState<ReportsProps[]>([])

  return {
    reports,
    setReports,
  }
}

export { useAppService }
