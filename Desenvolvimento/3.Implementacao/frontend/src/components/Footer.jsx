import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FooterContainer,
  FooterContent,
  Column,
  ColumnCenter
} from '../styles/components/Footer'

const Footer = () => {
  const [userLogged, setUserLogged] = useState(true)

  return (
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
        {
          userLogged
            ? (
              <Column>
                <h3><Link to="/editor/itens">Página do Editor</Link></h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  <div>
                    <p><Link to="/editor/locais">Locais</Link></p>
                    <p><Link to="/editor/cargos">Cargos</Link></p>
                    <p><Link to="/editor/categorias">Categorias</Link></p>
                  </div>
                  <div>
                    <p><Link to="/editor/usuarios">Usuários</Link></p>
                    <p><Link to="/editor/itens">Itens</Link></p>
                  </div>
                </div>
              </Column>
            )
            : (
              <ColumnCenter>
                <h3><Link to="/login">Login</Link></h3>
              </ColumnCenter>
            )
        }
      </FooterContent>
    </FooterContainer >
  )
}

export default Footer