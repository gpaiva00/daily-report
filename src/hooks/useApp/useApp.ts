import { nanoid } from 'nanoid'
import { BaseSyntheticEvent, useEffect, useMemo, useState } from 'react'
import { useAuth } from '..'
import { isDateToday } from '../../utils'
import { useReport } from '../useReport/useReport'

interface UseAppProps {
  toggleModal: () => void
}

function useApp({ toggleModal }: UseAppProps) {
  const [shouldDisableCreateButton, setShouldDisableCreateButton] = useState(true)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const todayDate = useMemo(() => new Date(), [])

  const { reports, createReport, deleteReport } = useReport(selectedDate)
  const { user } = useAuth()

  useEffect(() => {
    setShouldDisableCreateButton(!isDateToday(selectedDate))
  }, [selectedDate, todayDate])

  function handleCreateReport(e: BaseSyntheticEvent) {
    e.preventDefault()

    const [{ value: forTodayText }, { value: forNextDayText }, { value: blocksText }] = e.target.form
    const id = nanoid()
    const currentDateWithoutHours = new Date().setHours(0, 0, 0, 0)

    createReport({
      report: {
        forTodayText,
        forNextDayText,
        blocksText,
        link: `https://daily-report.app/${id}`,
        id,
        createdAtWithoutHours: currentDateWithoutHours,
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

  function handleSelectedDateChange(date: Date) {
    setSelectedDate(date)
  }

  return {
    reports,
    selectedDate,
    handleSelectedDateChange,
    handleCreateReport,
    shouldDisableCreateButton,
    handleDeleteReport,
  }
}

export { useApp }
