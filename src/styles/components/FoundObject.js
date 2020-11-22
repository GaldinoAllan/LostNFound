import styled from 'styled-components'

export const Container = styled.div`
  margin: 36px 24px;
  background: #FFFFFF;
  box-shadow: 2px 4px 13px rgba(0, 0, 0, 0.39);

  display: grid;
  grid-template-columns: 1fr;

  @media screen and (max-width: 800px){
    margin: 36px 16px;
  }
`

export const Image = styled.div`
  width: 190px;
  height: 150px;
  margin: 10px;
  align-self: center;
  justify-self: center;

  @media screen and (max-width: 800px){
    width: 120px;
    height: 90px;

    img{
      width: 120px;
      height: 90px;
    }
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 16px;
  flex: 1;
`

export const DescriptionLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 4px;
`

export const DescriptionItem = styled.div`
  line-height: 4px;

  @media screen and (max-width: 800px){
    line-height: 12px;
  }
`

export const DescriptionTitle = styled.p`
  font-size: 8px;

  @media screen and (max-width: 800px){
    margin: 0;
  }
`

export const DescriptionText = styled.p`
  font-size: 10px;
  color: #000;

  @media screen and (max-width: 800px){
    margin: 0;
  }
`
