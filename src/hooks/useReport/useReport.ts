import { useState } from 'react'
import { CreateReportMutationVariables, Report } from '../../graphql/generated/graphql'
import { useReportService } from '../useReportService'

function useReport() {
  const [reports, setReports] = useState<Report[]>([])
  const { getReportsQuery, getReportsLoading, createReportMutation, createReportLoading } = useReportService()

  async function getReports() {
    const { data } = await getReportsQuery()

    setReports(data?.reports)
  }

  async function createReport(report: CreateReportMutationVariables) {
    try {
      await createReportMutation({
        variables: {
          ...report,
        },
      })
    } catch (error) {
      console.error('Error to create report', error)
    }
  }

  return {
    getReportsLoading,
    createReportLoading,
    reports,
    getReports,
    createReport,
  }
}

export { useReport }
