import { useEffect, useState } from 'react'
import { useUserService } from '..'
import { Report } from '../../types'
import { getDateFromTimestamp } from '../../utils'
import { useReportService } from '../useReportService'

function useReport() {
  const [reports, setReports] = useState<Report[]>([])
  const { subscribeToReports, createReport: createReportOnDB } = useReportService()
  const { getUserFromReference } = useUserService()

  const createReport = async (report: Report) => createReportOnDB(report)

  useEffect(() => {
    const unsubscribe = subscribeToReports({
      observer: async (querySnapshot) => {
        const reports = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const { userRef, createdAt } = doc.data() as Report
            const user = await getUserFromReference(userRef)
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
  }
}

export { useReport }
