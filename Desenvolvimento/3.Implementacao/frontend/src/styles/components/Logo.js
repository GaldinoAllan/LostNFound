import styled from 'styled-components'

export const LogoContainer = styled.aside`
  background: #563887;
  display: flex;
  justify-content: center;
  align-items: center;

  a{
    text-decoration: none;
  }
  
  h1{
    color: white;
  }

  img{
    padding: 0px 15px;
    width: 100%;
  }

  @media(max-width: 576px) {
    img {
      width: 350px;
    }
  }
`