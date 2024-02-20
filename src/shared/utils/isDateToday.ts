function isDateToday(date: Date) {
  date.setHours(0, 0, 0, 0)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const diffInDays = Math.round((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

  return diffInDays === 0
}

export { isDateToday }
