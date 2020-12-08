import { useState } from 'react'
import { FaEye } from 'react-icons/fa'

import ComputerLady from '../assets/computerLady.png'
import Input from '../components/Input'

import {
  Container,
  FormContainer,
  Title,
  ShowPass,
  ButtonsContainer,
  Button,
} from '../styles/pages/Login'

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [passType, setPassType] = useState('password')

  const { email, password } = credentials;

  const handleSubmit = async event => {
    event.preventDefault();

    // Place to check if user exists and login the user
    console.log(email, password);

    setCredentials({
      email: '',
      password: '',
    })
  }

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...credentials, [name]: value });
  }

  const handleShowPass = () => {
    passType === 'password'
      ? setPassType('text')
      : setPassType('password')
  }

  return (
    <Container>
      <img src={ComputerLady} alt="computerLady" />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Title>Bem-vindos</Title>
          <Input
            type="email"
            name="email"
            label="Email"
            value={email}
            handleChange={handleChange}
            required
          />
          <Input
            type={passType}
            name="password"
            label="Senha"
            value={password}
            handleChange={handleChange}
            required
          />
          <ShowPass onClick={handleShowPass}>
            <FaEye size={16} />
            <p>Mostrar senha</p>
          </ShowPass>
          <ButtonsContainer>
            <Button>Login</Button>
          </ButtonsContainer>
        </form>
      </FormContainer>
    </Container>
  )
}

export default Login