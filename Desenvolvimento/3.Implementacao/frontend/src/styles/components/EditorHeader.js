import styled from 'styled-components'

export const Content = styled.header`
  background-color: #563887;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
export const Container = styled.div`
  width: 95%;
  height: 90%;
  background-color: #FFF;
  padding: 0px 15px;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 4px;

  box-shadow: 
    0 2px 23px 0 rgba(0, 0, 0, 0.1),
    0 2px 49px 0 rgba(0, 0, 0, 0.06);
`

export const HeaderTitle = styled.h1`
  font-size: 1.8em;
`