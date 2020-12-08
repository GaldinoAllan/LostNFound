import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MenuArea = styled.aside`
  background-color: #563887;
    box-shadow: 
        2px 0 10x 0 rgba(0, 0, 0, 0.12),
        2px 0 15px 0 rgba(0, 0, 0, 0.09);
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
    background: linear-gradient(135deg, var(#563887) 0%, var(#563887, 100%) 100%);
    color: #fff;
    text-decoration: none;
  }

  @media(max-width: 800px) {
    display: inline;
    padding: 10px;
    margin: 0px;
  }
`