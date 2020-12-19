import { Container } from '../styles/components/Button'

const Button = ({ children, background, icon, onClick }) => (
  <Container onClick={onClick} background={background}>
    {icon &&
      <div>
        {icon}
      </div>
    }
    <p>{children}</p>
  </Container >
)

export default Button