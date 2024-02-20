export const copyToClipboard = (text: string) => {
  const temporaryElement = document.createElement('div')

  temporaryElement.innerHTML = text

  const plainText = temporaryElement.textContent || temporaryElement.innerText || ''

  navigator.clipboard.writeText(plainText)
  // .then(() => {
  //   toast('Link copiado para a área de transferência', {
  //     icon: '📋',
  //   })
  // })
  // .catch(() => {
  //   toast.error('Falha ao copiar texto')
  // })
}
