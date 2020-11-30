import styled from 'styled-components'

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ModalTitle = styled.h1`
  font-size: 24px;
  margin: 24px auto 56px;

  @media screen and (max-width: 800px){
    margin: 8px auto 24px;
  }
`

export const ModalText = styled.div`
  margin: 0 50px 56px;

  @media screen and (max-width: 800px){
    font-size: 16px;
    margin: auto;

  }
`
