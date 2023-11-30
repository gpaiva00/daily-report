import { BaseSyntheticEvent, useEffect } from 'react'
import { useReport } from '../useReport/useReport'

interface UseAppProps {
  toggleModal: () => void
}

function useApp({ toggleModal }: UseAppProps) {
  const { reports, getReports, createReport, getReportsLoading, createReportLoading } = useReport()

  function handleCreateReport(e: BaseSyntheticEvent) {
    e.preventDefault()

    const [forTodayText, forNextDayText, blocksText] = e.target.form

    createReport({
      forTodayText,
      forNextDayText,
      blocksText,
      link: 'https://google.com',
      userID: 'clpkhcjg30lxd0bls9zk03m8q',
    })

    toggleModal()
  }

  useEffect(() => {
    getReports()
  }, [])

  return {
    reports,
    getReportsLoading,
    createReportLoading,
    handleCreateReport,
  }
}

export { useApp }
