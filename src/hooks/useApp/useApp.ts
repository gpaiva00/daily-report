import { DocumentReference } from 'firebase/firestore'
import { nanoid } from 'nanoid'
import { BaseSyntheticEvent } from 'react'
import { useReport } from '../useReport/useReport'

interface UseAppProps {
  toggleModal: () => void
}

function useApp({ toggleModal }: UseAppProps) {
  const { reports, createReport } = useReport()

  function handleCreateReport(e: BaseSyntheticEvent) {
    e.preventDefault()

    const [{ value: forTodayText }, { value: forNextDayText }, { value: blocksText }] = e.target.form
    const id = nanoid()

    createReport({
      forTodayText,
      forNextDayText,
      blocksText,
      link: `https://daily-report.app/${id}`,
      id,
      userRef: 'users/POGY5djICPewSxuuK12H' as unknown as DocumentReference,
      createdAt: Date.now(),
    })

    toggleModal()
  }

  return {
    reports,
    handleCreateReport,
  }
}

export { useApp }
