import { Link } from 'react-router-dom';

import { LogoContainer } from '../styles/components/Logo'

const Logo = () => (
  <LogoContainer className="logo">
    <Link to="/editor">
      <h1>Página do Editor</h1>
    </Link>
  </LogoContainer>
)

export default Logo