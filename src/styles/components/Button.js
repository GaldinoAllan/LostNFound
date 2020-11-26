import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  background: #000;
  height: 28px;
  border-radius: 8px;
  border: 0;
  padding: 0 16px;
  color: #FFF;
  width: 100%;

  div{
    align-self: center;
    justify-self: center;
  }

  p{
    color: #FFF;
    font-size: 12px;
    align-self: center;
    justify-self: center;
  }

  @media screen and (max-width: 800px){
    width: unset;
    grid-template-columns: 1fr;

    p{
      display: none;
    }
  }
`