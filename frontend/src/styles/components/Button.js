import styled, { css } from 'styled-components'

const add = css`
  background-color: #2ecc71;
  color: black;

  p{
    color: black
  }
`;

const remove = css`
  background-color: #e74c3c;
  color: white;

  p{
    color: white
  }
`;

const edit = css`
  background-color: #f1c40f;
  color: black;

  p{
    color: black
  }
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
  ${getButtonColor}

  div{
    align-self: center;
    justify-self: center;
  }

  p{
    font-size: 12px;
    align-self: center;
    justify-self: center;
  }

  @media screen and (max-width: 800px){
    width: unset;
    grid-template-columns: 1fr;

    p{
      display: none;
    }
  }
`