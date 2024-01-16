import { nanoid } from 'nanoid'
import { BaseSyntheticEvent, useEffect, useState } from 'react'
import { useAuth } from '..'
import { useReport } from '../useReport/useReport'

interface UseAppProps {
  toggleModal: () => void
}

function useApp({ toggleModal }: UseAppProps) {
  const [shouldDisableCreateButton, setShouldDisableCreateButton] = useState(true)
  const [selectedDate] = useState(new Date())

  const { reports, createReport, deleteReport } = useReport()
  const { user } = useAuth()

  useEffect(() => {
    if (selectedDate !== new Date()) return

    setShouldDisableCreateButton(true)
  }, [selectedDate])

  function handleCreateReport(e: BaseSyntheticEvent) {
    e.preventDefault()

    const [{ value: forTodayText }, { value: forNextDayText }, { value: blocksText }] = e.target.form
    const id = nanoid()

    createReport({
      report: {
        forTodayText,
        forNextDayText,
        blocksText,
        link: `https://daily-report.app/${id}`,
        id,
        createdAt: Date.now(),
      },
      userRef: `/users/${user?.ref}`,
    })

    toggleModal()
  }

  function handleDeleteReport(id: string) {
    const confirm = window.confirm('Deseja mesmo apagar este report?')

    if (!confirm) return

    deleteReport(id)
  }

  return {
    reports,
    handleCreateReport,
    shouldDisableCreateButton,
    handleDeleteReport,
  }
}

export { useApp }
