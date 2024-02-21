import { nanoid } from 'nanoid'
import { useEffect, useMemo, useState } from 'react'
import { z } from 'zod'

import { useAuth, useReport } from '@/shared/hooks'
import { getUserNameInitials, isDateToday } from '@/shared/utils'

import { FormSchemaProps } from '@/pages/Home/components/CreateReportModal/CreateReportModal'

interface UseAppProps {
  toggleModal: () => void
}

function useHome({ toggleModal }: UseAppProps) {
  const [shouldDisableCreateButton, setShouldDisableCreateButton] = useState(true)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const todayDate = useMemo(() => new Date(), [])

  const { reports, createReport, deleteReport } = useReport(selectedDate)
  const { user } = useAuth()

  useEffect(() => {
    setShouldDisableCreateButton(!isDateToday(selectedDate))
  }, [selectedDate, todayDate])

  function handleCreateReport(values: z.infer<FormSchemaProps>) {
    const { nextSteps: nextStepsText, forToday: forTodayText, blocks: blocksText } = values

    const id = nanoid()
    const currentDateWithoutHours = new Date().setHours(0, 0, 0, 0)
    const { displayName, email, photoURL, uid, username } = user!

    createReport({
      forTodayText,
      nextStepsText,
      blocksText,
      link: `https://daily-report.app/${id}`,
      id,
      createdAtWithoutHours: currentDateWithoutHours,
      createdAt: Date.now(),
      user: {
        displayName,
        email,
        photoURL,
        uid,
        username,
      },
    })

    toggleModal()
  }

  function handleDeleteReport(id: string) {
    const confirm = window.confirm('Deseja mesmo apagar este report?')

    if (!confirm) return

    deleteReport(id)
  }

  function handleSelectedDateChange(date: Date | undefined) {
    if (!date) return

    setSelectedDate(date)
  }

  return {
    user: {
      ...user,
      initials: getUserNameInitials(user?.displayName),
    },
    reports,
    selectedDate,
    handleSelectedDateChange,
    handleCreateReport,
    handleDeleteReport,
    shouldDisableCreateButton,
  }
}

export { useHome }
