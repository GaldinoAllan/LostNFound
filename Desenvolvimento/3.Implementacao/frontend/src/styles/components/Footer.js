import styled from 'styled-components'

export const FooterContainer = styled.footer`
position: fixed;
  height: 120px;
  display: flex;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: #FCFCFC;
  /* background-color: black; */

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    height: 350px;
  }
`

export const FooterContent = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 100px;
  
  max-width: 1200px;
  
  @media screen and (max-width: 1400px) {
    margin: 0 80px;
  }
  
  @media screen and (max-width: 800px) {
    grid-gap: 50px;
    grid-template-columns: 1fr 1fr; 
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  h3{
    padding-bottom: 4px;
  }

  p{
    font-size: 12px;
  }

  a{
    text-decoration: none;
    color: #5c5c5c;
  }
`

export const ColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;

  h3{
    padding-bottom: 4px;
  }

  &:last-child{
    justify-content: center;
  }
  
  p{
    font-size: 12px;
  }

  a{
    text-decoration: none;
    color: #5c5c5c;
  }
  
  @media screen and (min-width: 800px) {
    align-items: center;
  }
`