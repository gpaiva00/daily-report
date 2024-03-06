import { nanoid } from 'nanoid'
import { useEffect, useMemo, useState } from 'react'
import { z } from 'zod'

import { useAuthContext, useReport } from '@/shared/hooks'
import { isDateToday } from '@/shared/utils'

import { FormSchemaProps } from '@/pages/Home/components/CreateReportModal'
import { useTeamContext } from '@/shared/hooks/useTeamContext'

interface UseAppProps {
  toggleCreateReportModal: () => void
  toggleMustHaveReportModal: () => void
}

function useHome({ toggleCreateReportModal, toggleMustHaveReportModal }: UseAppProps) {
  const [shouldDisableCreateButton, setShouldDisableCreateButton] = useState(true)
  const [selectedDate, setSelectedDate] = useState(new Date())

  const todayDate = useMemo(() => new Date(), [])

  const { reports, createReport, deleteReport: handleDeleteReport } = useReport(selectedDate)
  const { user } = useAuthContext()
  const { selectedTeam } = useTeamContext()

  useEffect(() => {
    setShouldDisableCreateButton(!isDateToday(selectedDate))
  }, [selectedDate, todayDate])

  function handleCreateReport(values: z.infer<FormSchemaProps>) {
    const { nextSteps: nextStepsText, forToday: forTodayText, blocks: blocksText } = values

    const id = nanoid()
    const currentDateWithoutHours = new Date().setHours(0, 0, 0, 0)

    createReport({
      forTodayText,
      nextStepsText,
      blocksText,
      link: `https://daily-report.app/${id}`,
      id,
      ownerId: user?.uid,
      createdAtWithoutHours: currentDateWithoutHours,
      createdAt: Date.now(),
      teamId: selectedTeam?.id,
    })

    toggleCreateReportModal()
  }

  function handleSelectedDateChange(date: Date | undefined) {
    if (!date) return

    setSelectedDate(date)
  }

  function handleClickOnCreateReport() {
    if (!selectedTeam) {
      return toggleMustHaveReportModal()
    }

    toggleCreateReportModal()
  }

  return {
    user,
    reports,
    selectedDate,
    selectedTeam,
    handleSelectedDateChange,
    handleCreateReport,
    handleDeleteReport,
    shouldDisableCreateButton,
    handleClickOnCreateReport,
  }
}

export { useHome }
