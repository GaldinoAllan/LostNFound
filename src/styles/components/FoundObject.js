import styled from 'styled-components'

export const FoundObj = styled.div`

`

export const Container = styled.div`
  max-width: 210px;
  min-height: 300px;
  margin: 8px 24px;
  background: #FFFFFF;
  box-shadow: 2px 4px 13px rgba(0, 0, 0, 0.39);

  display: grid;
  grid-template-columns: 1fr;

  @media screen and (max-width: 800px){
    margin: 8px 16px;
    width: 140px;
  }
`

export const Image = styled.div`
  width: 190px;
  height: 150px;
  margin: 10px;
  align-self: center;
  justify-self: center;

  img{
    width: 190px;
    height: 150px;
    object-fit: cover;
  }

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
`

export const DescriptionLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 4px;
  grid-gap: 8px;
`

export const DescriptionItem = styled.div`

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

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin: 0 24px 16px;
`