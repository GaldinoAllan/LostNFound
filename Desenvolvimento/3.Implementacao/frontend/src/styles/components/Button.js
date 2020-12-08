import styled, { css } from 'styled-components'

const add = css`
  background-color: #2ecc71;
`;

const remove = css`
  background-color: #e74c3c;
`;

const edit = css`
  background-color: #a3a3a3;
`;

const getButtonColor = props => {
  if (props.background === "add") {
    return add
  } else if (props.background === "remove") {
    return remove
  } else if (props.background === "edit") {
    return edit
  }
}

export const Container = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  height: 100%;
  border-radius: 8px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  flex: 1;
  color: white;
  ${getButtonColor}

  div{
    align-self: center;
    justify-self: center;
  }

  p{
    font-size: 12px;
    align-self: center;
    justify-self: center;
    color: white
  }

  @media screen and (max-width: 800px){
    width: unset;
    grid-template-columns: 1fr;

    p{
      display: none;
    }
  }
`