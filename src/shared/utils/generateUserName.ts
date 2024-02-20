function generateUsername(name: string | null): string {
  if (!name) return ''

  const lowercaseName = name.trim().toLowerCase()

  const randomNumber = Math.floor(Math.random() * 900) + 100

  const cleanedName = lowercaseName.replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')

  const username = `${cleanedName}${randomNumber}`

  return username
}

export { generateUsername }
