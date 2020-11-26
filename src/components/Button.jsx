import { Container } from '../styles/components/Button'

const Button = ({ children, icon }) => (
  <Container>
    {icon}
    <p>{children}</p>
  </Container >
)

export default Button