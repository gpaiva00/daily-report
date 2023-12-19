import { useEffect, useRef, useState } from 'react'

const isTextOverflowing = (text: HTMLElement | null) => (text ? text.scrollHeight > text.clientHeight : false)

function useReportCard() {
  const forTodayTextRef = useRef(null)
  const forNextDayTextRef = useRef(null)
  const blocksTextRef = useRef(null)

  const [showReadMoreButton, setShowReadMoreButton] = useState(false)

  useEffect(() => {
    setShowReadMoreButton(
      isTextOverflowing(forTodayTextRef.current) ||
        isTextOverflowing(forNextDayTextRef.current) ||
        isTextOverflowing(blocksTextRef.current)
    )
  }, [forTodayTextRef, forNextDayTextRef, blocksTextRef])

  return {
    forTodayTextRef,
    forNextDayTextRef,
    blocksTextRef,
    showReadMoreButton,
  }
}

export { useReportCard }
