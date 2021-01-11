import { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import ComputerLady from '../assets/computerLady.png'
import Input from '../components/Input'

import { useAuth } from '../hooks/auth'

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

  const { signIn } = useAuth()

  const history = useHistory()

  const handleSubmit = async event => {
    event.preventDefault();

    const schema = Yup.object().shape({
      email: Yup.string()
        .required('Email é obrigatório.')
        .email('Digite um e-mail válido.'),
      password: Yup.string().required('Senha obrigatória!')
    })

    await schema.validate(credentials, {
      abortEarly: false
    })

    // Place to sign the user in
    signIn(credentials)

    setCredentials({
      email: '',
      password: '',
    })

    history.push('/editor')
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