import { useState } from 'react'

function useModal() {
  const [isOpen, setIsOpen] = useState(false)

  return {
    isOpen,
    toggleModal: () => setIsOpen(!isOpen),
  }
}

export { useModal }
