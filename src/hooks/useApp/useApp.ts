import { BaseSyntheticEvent } from 'react'
import { useAppService } from '../useAppService'

interface UseAppProps {
  toggleModal: () => void
}

function useApp({ toggleModal }: UseAppProps) {
  const { reports, setReports } = useAppService()

  function handleCreateReport(e: BaseSyntheticEvent) {
    e.preventDefault()

    const [forToday, forNextDay, blocks] = e.target.form

    setReports((prev) => [
      ...prev,
      {
        forToday: forToday.value,
        forNextDay: forNextDay.value,
        blocks: blocks.value,
        link: '',
        user: {
          name: 'Gabriel Paiva',
          username: '@papaiva',
          photo: '',
        },
      },
    ])

    toggleModal()
  }

  return {
    handleCreateReport,
    reports,
  }
}

export { useApp }
