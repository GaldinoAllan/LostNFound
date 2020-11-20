import { FiHelpCircle } from 'react-icons/fi'

import {
  LandingContainer,
  Title,
  Info,
  LandingHeader,
  Content
} from '../styles/pages/Landing'

const Landing = () => (
  <LandingContainer>
    <LandingHeader>
      <Title>Objetos encontrados</Title>
      <Info>
        <FiHelpCircle />
      </Info>
    </LandingHeader>
    <Content />
  </LandingContainer>
)

export default Landing