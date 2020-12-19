import styled, { css } from 'styled-components'

const green = css`
  background-color: #2ecc71;
`;

const red = css`
  background-color: #e74c3c;
`;

const grey = css`
  background-color: #a3a3a3;
`;

const blue = css`
  background-color: #69ADFF;
`;

const yellow = css`
  background-color: #FFC804;
`;

const getButtonColor = props => {
  if (props.background === "green") {
    return green
  } else if (props.background === "red") {
    return red
  } else if (props.background === "grey") {
    return grey
  } else if (props.background === "blue") {
    return blue
  } else if (props.background === "yellow") {
    return yellow
  }
}

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
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