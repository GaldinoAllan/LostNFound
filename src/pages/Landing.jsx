import { useState } from 'react'
import { FiHelpCircle } from 'react-icons/fi'

import InfoModal from '../components/InfoModal'

import {
  LandingContainer,
  Title,
  Info,
  LandingHeader,
  Content
} from '../styles/pages/Landing'

const Landing = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true)

  const handleOpenModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  return (
    <LandingContainer>
      <LandingHeader>
        <Title>Objetos encontrados</Title>
        <Info onClick={handleOpenModal}>
          <FiHelpCircle />
        </Info>
      </LandingHeader>
      {modalIsOpen && (
        <InfoModal isOpen={modalIsOpen} setIsOpen={handleOpenModal} />
      )}
      <Content />
    </LandingContainer>
  )
}

export default Landing