import { Link } from 'react-router-dom'
import {
  FooterContainer,
  FooterContent,
  Column,
  ColumnCenter
} from '../styles/components/Footer'

const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <Column>
        <h3>Endereço</h3>
        <p>Rua Rio Branco, 1780</p>
        <p>Vila Teixeira, Salto - SP</p>
        <p>CEP 13320-271</p>
      </Column>
      <Column>
        <h3><Link to="/faq">Dúvidas frequentes</Link></h3>
        <p>Como descrever meu objeto?</p>
        <p>Como ter meu objeto restituído?</p>
      </Column>
      <ColumnCenter>
        <h3>Contato</h3>
        <p>salto@ifsp.edu.br</p>
        <p>(11) 4602-9191</p>
      </ColumnCenter>
      <ColumnCenter>
        <h3>Login</h3>
        <h3>Register</h3>
      </ColumnCenter>
    </FooterContent>
  </FooterContainer>
)

export default Footer