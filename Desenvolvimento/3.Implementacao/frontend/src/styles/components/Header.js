import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
  /* height: 120px; */
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background: #FCFCFC;

  @media screen and (max-width: 800px) {
    padding: unset;
    justify-content: center;
  }
`

export const Title = styled(Link)`
  text-decoration: none;
  color: #5C5C5C;
  font-family: Michroma, sans-serif;
  font-size: 24px;
  /* font-size: 30px; */
  
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`

export const Logout = styled.p`
  cursor: pointer
`