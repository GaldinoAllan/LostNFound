import { useState } from 'react'
import { FiHelpCircle } from 'react-icons/fi'

import InfoModal from '../components/InfoModal'
import FoundObject from '../components/FoundObject'

import BirdImage from '../assets/templateBird.png'

import {
  LandingContainer,
  Title,
  Info,
  LandingHeader,
  Content
} from '../styles/pages/Landing'

const Landing = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

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
      <Content>
        <FoundObject
          image={BirdImage}
          item='Estojo'
          place='Sala 315'
          category='Material Escolar'
          date='18/09/2020'
          description='Estojo rosa com chaveiro de urso'
        />
        <FoundObject
          image={BirdImage}
          item='Estojo'
          place='Sala 315'
          category='Material Escolar'
          date='18/09/2020'
          description='Estojo rosa com chaveiro de urso'
        />
        <FoundObject
          image={BirdImage}
          item='Estojo'
          place='Sala 315'
          category='Material Escolar'
          date='18/09/2020'
          description='Estojo rosa com chaveiro de urso'
        />
        <FoundObject
          image={BirdImage}
          item='Estojo'
          place='Sala 315'
          category='Material Escolar'
          date='18/09/2020'
          description='Estojo rosa com chaveiro de urso'
        />
        <FoundObject
          image={BirdImage}
          item='Estojo'
          place='Sala 315'
          category='Material Escolar'
          date='18/09/2020'
          description='Estojo rosa com chaveiro de urso'
        />
        <FoundObject
          image={BirdImage}
          item='Estojo'
          place='Sala 315'
          category='Material Escolar'
          date='18/09/2020'
          description='Estojo rosa com chaveiro de urso'
        />
        <FoundObject
          image={BirdImage}
          item='Estojo'
          place='Sala 315'
          category='Material Escolar'
          date='18/09/2020'
          description='Estojo rosa com chaveiro de urso'
        />
        <FoundObject
          image={BirdImage}
          item='Estojo'
          place='Sala 315'
          category='Material Escolar'
          date='18/09/2020'
          description='Estojo rosa com chaveiro de urso'
        />
        <FoundObject
          image={BirdImage}
          item='Estojo'
          place='Sala 315'
          category='Material Escolar'
          date='18/09/2020'
          description='Estojo rosa com chaveiro de urso'
        />
        <FoundObject
          image={BirdImage}
          item='Estojo'
          place='Sala 315'
          category='Material Escolar'
          date='18/09/2020'
          description='Estojo rosa com chaveiro de urso'
        />
        <FoundObject
          image={BirdImage}
          item='Estojo'
          place='Sala 315'
          category='Material Escolar'
          date='18/09/2020'
          description='Estojo rosa com chaveiro de urso'
        />
        <FoundObject
          image={BirdImage}
          item='Estojo'
          place='Sala 315'
          category='Material Escolar'
          date='18/09/2020'
          description='Estojo rosa com chaveiro de urso'
        />
        <FoundObject
          image={BirdImage}
          item='Estojo'
          place='Sala 315'
          category='Material Escolar'
          date='18/09/2020'
          description='Estojo rosa com chaveiro de urso'
        />
      </Content>
    </LandingContainer>
  )
}

export default Landing