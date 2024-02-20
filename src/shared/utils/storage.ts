const getFromStorage = (key: string) => {
  const item = localStorage.getItem(key)
  return item ? JSON.parse(item) : null
}

const setToStorage = (key: string, value: string | number | object) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export { getFromStorage, setToStorage }
