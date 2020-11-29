import styled from 'styled-components'

export const Container = styled.div`
  margin: 80px auto;
  max-width: 1275px;
  height: 715px;
  background-color: #FCFCFC;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 64px;
  border-radius: 25px;

  img{
    align-self: center;
  }

  @media screen and (max-width: 1000px){
    margin: 16px 8px;
    padding: 0 16px;
    display: flex;
    height: auto;
    
    img{
      display: none;
    }
  }
`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
  align-self: center;

  @media screen and (max-width: 800px){
    align-self: unset;
    margin: 16px 0;
  }
`

export const Title = styled.h1`
  font-family: Michroma, sans-serif;
  font-weight: 400;
`

export const ShowPass = styled.div`
  width: 115px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: -36px 4px 36px;
  font-size: 12px;
  color: #5c5c5c;

  p{
    margin-left: 4px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  a{
    text-decoration: none;
    color: #5c5c5c;
    font-family: Michroma, sans-serif;
    font-weight: 400;
    font-size: 12px;
    margin-right: 24px;

    @media screen and (max-width: 800px){
      margin: 8px;
    }
  }
`;

export const Button = styled.button`
  width: 160px;
  height: 56px;
  background: #6945D1;
  border-radius: 36px;
  border: none;
  color: #FFF;
  font-family: Michroma, sans-serif;
  font-weight: 400;
`