import { useState } from 'react'
import { Link } from 'react-router-dom'
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
  const [passType, setPassType] = useState('password')
  const [credentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { displayName, email, password, confirmPassword } = credentials

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password and password confirmation do not match')
      return;
    };

    // Place to insert into database the new user
    console.log(displayName, email, password, confirmPassword)

    setCredentials({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  };

  const handleChange = event => {
    const { name, value } = event.target;
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
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Nome'
            required
          />
          <Input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <Input
            type={passType}
            name='password'
            value={password}
            onChange={handleChange}
            label='Senha'
            required
          />
          <Input
            type={passType}
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirme a senha'
            required
          />
          <ShowPass onClick={handleShowPass}>
            <FaEye size={16} />
            <p>Mostrar senhas</p>
          </ShowPass>
          <ButtonsContainer>
            <Link to="/login">Já tem uma conta?</Link>
            <Button type='submit'>Registrar</Button>
          </ButtonsContainer>
        </form>
      </FormContainer>
    </Container>
  )
}

export default Login