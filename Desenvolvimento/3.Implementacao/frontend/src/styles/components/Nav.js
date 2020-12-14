import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MenuArea = styled.aside`
  background-color: #563887;
`

export const Menu = styled.nav`
  @media(max-width: 800px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    justify-content: space-around;
  }
`

export const MenuLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: #FFF;
  font-weight: 300;
  padding: 15px;

  &:hover{
    background: linear-gradient(135deg, #563887 0%, #9369D9 150%);
  }

  @media(max-width: 800px) {
    display: inline;
    padding: 10px;
    margin: 0px;
  }
`