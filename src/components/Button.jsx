import { Container } from '../styles/components/Button'

const Button = ({ children, icon, onClick }) => (
  <Container onClick={onClick}>
    <div>
      {icon}
    </div>
    <p>{children}</p>
  </Container >
)

export default Button