import styled from 'styled-components'

export const LandingContainer = styled.div`
  margin: 24px auto;
  max-width: 1275px;
  min-height: 1144px;
  background-color: #FCFCFC;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 150px;

  @media screen and (max-width: 800px){
    margin: 8px 8px 16px;
    margin-bottom: 360px;
  }
`

export const Title = styled.h1`
  font-size: 30px;
  margin-right: 16px;

`

export const LandingHeader = styled.div`
  margin: 36px 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px){
    margin: unset;
    margin-bottom: 24px;
    align-items: flex-start;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px){
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Info = styled.div`
  width: 80px;
  height: 80px;
  box-shadow: 2px 4px 13px rgba(0, 0, 0, 0.39);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  svg{
    width: 70%;
    height: 70%;
    color: #5c5c5c;
  }

  @media screen and (max-width: 800px){
    width: 50px;
    height: 40px;
  }
`

export const Content = styled.div`
  display: flex;
  margin: 16px;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media screen and (max-width: 800px){
    margin: unset;
    flex-wrap: unset;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-self: center;
    justify-self: center;
  }
`

export const ButtonContent = styled.div`
  width: 200px;
  height: 56px;
  margin: 0 64px;

  @media screen and (max-width: 800px){
    width: 100%;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px){
    justify-content: center;
  }
`