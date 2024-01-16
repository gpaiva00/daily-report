import { useEffect, useState } from 'react'
import { useUserService } from '..'
import { Report } from '../../types'
import { getDateFromTimestamp } from '../../utils'
import { useReportService } from '../useReportService'

function useReport() {
  const [reports, setReports] = useState<Report[]>([])
  const { subscribeToReports, createReport: createReportOnDB, deleteReport: deleteReportOnDB } = useReportService()
  const { getUserFromReference } = useUserService()

  async function createReport({ report, userRef }: { report: Report; userRef: string }) {
    createReportOnDB(report, userRef)
  }

  async function deleteReport(id: string) {
    deleteReportOnDB(id)
  }

  useEffect(() => {
    const unsubscribe = subscribeToReports({
      observer: async (querySnapshot) => {
        const reports = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const { userRef, createdAt } = doc.data() as Report
            const user = userRef ? await getUserFromReference(userRef) : {}
            const formattedDate = getDateFromTimestamp(createdAt as number)

            const reportWithUserData = {
              ...doc.data(),
              createdAt: formattedDate,
              user,
            } as Report

            return reportWithUserData
          })
        )

        setReports(reports as unknown as Report[])
      },
    })

    return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    reports,
    createReport,
    deleteReport,
  }
}

export { useReport }
