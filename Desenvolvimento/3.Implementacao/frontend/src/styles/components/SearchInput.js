import styled from 'styled-components'

export const SearchBox = styled.div`
  transform: translate(0%, 0%);
  background: #ecf0f1;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  &:hover > input{
    width: 240px;
    padding: 0 6px;
  }

  &:hover > div{
    background: #FCFCFC;
  }

  @media screen and (max-width: 900px){
  &:hover > input{
    width: 200px;
  }
  }
`

export const SearchBtn = styled.div`
  color: #98C7FF;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ecf0f1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.4s;
`

export const SearchText = styled.input`
  border: none;
  background: none;
  outline: none;
  padding: 0;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 0px;
`