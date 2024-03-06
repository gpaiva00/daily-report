const ignoreTextDefault = ['de', 'da', 'do']

function capitalize(text: string, ignore?: string[]): string {
  const _ignoreText = ignore ?? ignoreTextDefault

  return text
    .split(' ')
    .map((word) => {
      if (_ignoreText.includes(word)) return word.toLocaleLowerCase()

      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

export { capitalize }
