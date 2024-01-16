import { useEffect, useRef, useState } from 'react'
import { useAuth } from '..'
import { Report } from '../../types'

// const isTextOverflowing = (text: HTMLElement | null) => (text ? text.scrollHeight > text.clientHeight : false)

function useReportCard(report: Report) {
  const [shouldShowDeleteButton, setShouldShowDeleteButton] = useState(false)
  const { user } = useAuth()

  const forTodayTextRef = useRef(null)
  const forNextDayTextRef = useRef(null)
  const blocksTextRef = useRef(null)

  // useEffect(() => {
  //   setShowReadMoreButton(
  //     isTextOverflowing(forTodayTextRef.current) ||
  //       isTextOverflowing(forNextDayTextRef.current) ||
  //       isTextOverflowing(blocksTextRef.current)
  //   )
  // }, [forTodayTextRef, forNextDayTextRef, blocksTextRef])

  useEffect(() => {
    if (user?.username != report.user?.username) return

    setShouldShowDeleteButton(true)
  }, [user?.username, report.user?.username])

  return {
    forTodayTextRef,
    forNextDayTextRef,
    blocksTextRef,
    shouldShowDeleteButton,
  }
}

export { useReportCard }
