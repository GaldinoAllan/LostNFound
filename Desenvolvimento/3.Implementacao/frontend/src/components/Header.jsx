import { useAuth } from '../hooks/auth'

import {
  HeaderContainer,
  Title,
  Logout
} from '../styles/components/Header'

const Header = () => {
  const { user, signOut } = useAuth()

  return (
    <HeaderContainer>
      <Title to="/">Achados e Perdidos IFSP</Title>
      {
        !!user ? (
          <Logout onClick={signOut}>
            Logout
          </Logout>
        ) : <p> </p>
      }

    </HeaderContainer>
  )
}

export default Header