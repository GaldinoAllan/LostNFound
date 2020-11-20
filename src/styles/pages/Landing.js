import styled from 'styled-components'

export const LandingContainer = styled.div`
  margin: 80px;
  max-width: 1275px;
  min-height: 1144px;
  background-color: #FCFCFC;
  display: flex;
  flex-direction: column;
  
  @media screen and (min-width: 1400px) {
    margin: 80px auto;
  }

  padding: 20px;
  padding-bottom: 50px;

  @media screen and (max-width: 800px){
    margin: 8px;
  }
`

export const Title = styled.h1`
  font-size: 30px;
`

export const LandingHeader = styled.div`
  margin: 36px 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 800px){
    margin: unset;
  }
`
export const Info = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 2px 4px 13px rgba(0, 0, 0, 0.39);
  border-radius: 20px;
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
    width: 54px;
    height: 54px;
  }
`
export const Content = styled.div`
  
`