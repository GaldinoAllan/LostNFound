import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background: #FCFCFC;

  @media screen and (max-width: 800px) {
   height: 120px;
   padding: 10px;
   margin-bottom: 20px;
   flex-direction: column;
   justify-content: center;
  }
`

export const Title = styled.h1`
  font-family: Michroma, sans-serif;
  font-size: 30px;
  width: 1300px;
  
  @media screen and (max-width: 800px) {
    width: unset;
    font-size: 20px;
  }
`