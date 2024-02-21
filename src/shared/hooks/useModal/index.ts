import { useState } from 'react'

function useModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return {
    isModalOpen,
    toggleModal: () => setIsModalOpen(!isModalOpen),
  }
}

export { useModal }
