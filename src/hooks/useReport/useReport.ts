import { useEffect, useState } from 'react'

import { Report } from '@types'
import { useReportService } from '../useReportService'

function useReport(selectedDate: Date) {
  const [reports, setReports] = useState<Report[]>([])
  const { subscribeToReports, createReport: createReportOnDB, deleteReport: deleteReportOnDB } = useReportService()

  useEffect(() => {
    const unsubscribe = subscribeToReports({
      observer: async (querySnapshot) => {
        const reports = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const { createdAt } = doc.data() as Report
            const formattedDate = `às ${new Date(createdAt).getHours()}h`

            const report = {
              ...doc.data(),
              createdAt: formattedDate,
            }

            return report
          })
        )

        setReports(reports as Report[])
      },
      createdAtTimestamp: new Date(selectedDate.getTime()).setHours(0, 0, 0, 0),
    })

    return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate])

  async function createReport(report: Report) {
    createReportOnDB(report)
  }

  async function deleteReport(id: string) {
    deleteReportOnDB(id)
  }

  return {
    reports,
    createReport,
    deleteReport,
  }
}

export { useReport }
