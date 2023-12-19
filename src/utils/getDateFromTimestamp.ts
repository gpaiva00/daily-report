const getDateFromTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp)
  date.setHours(0, 0, 0, 0)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const diffInDays = Math.round((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  const hoursAndMinutes = `${new Date(timestamp).getHours()}:${new Date(timestamp).getMinutes()}`

  let formattedDate = ''

  switch (diffInDays) {
    case 0:
      formattedDate = 'hoje'
      break
    case -1:
      formattedDate = 'ontem'
      break
    case -2:
      formattedDate = 'anteontem'
      break
    default:
      formattedDate = date.toLocaleDateString()
  }

  return `${formattedDate} às ${hoursAndMinutes}`
}

export { getDateFromTimestamp }
