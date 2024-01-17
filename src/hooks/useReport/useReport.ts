import { useEffect, useState } from 'react'
import { useUserService } from '..'
import { Report } from '../../types'
import { useReportService } from '../useReportService'

function useReport(selectedDate: Date) {
  const [reports, setReports] = useState<Report[]>([])
  const { subscribeToReports, createReport: createReportOnDB, deleteReport: deleteReportOnDB } = useReportService()
  const { getUserFromReference } = useUserService()

  useEffect(() => {
    const unsubscribe = subscribeToReports({
      observer: async (querySnapshot) => {
        const reports = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const { userRef, createdAt } = doc.data() as Report
            const user = userRef ? await getUserFromReference(userRef) : {}
            const formattedDate = `às ${new Date(createdAt).getHours()}h`

            const reportWithUserData = {
              ...doc.data(),
              createdAt: formattedDate,
              user,
            } as Report

            return reportWithUserData
          })
        )

        setReports(reports as Report[])
      },
      createdAtTimestamp: new Date(selectedDate.getTime()).setHours(0, 0, 0, 0),
    })

    return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate])

  async function createReport({ report, userRef }: { report: Report; userRef: string }) {
    createReportOnDB(report, userRef)
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
