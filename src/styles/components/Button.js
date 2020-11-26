import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  height: 28px;
  border-radius: 8px;
  border: 0;
  padding: 0 16px;
  color: #FFF;
  width: 100%;

  p{
    color: #FFF
  }

  @media screen and (max-width: 800px){
    width: unset;
    justify-content: center;
    
    p{
      display: none;
    }
  }
`