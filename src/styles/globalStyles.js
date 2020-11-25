import { createGlobalStyle } from 'styled-components';

import bgImg from '../assets/BG_IMG.svg'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  /* background: #98C7FF; */
  background: url(${bgImg}) no-repeat top;
  -webkit-font-smoothing: antialiased;
  height: 100%;
}

body, input, button, textarea {
  font-family: Montserrat, sans-serif;
}

h1, h2, h3, h4, h5, h6, p{
  color: #5C5C5C;
}

a, button{
  cursor: pointer;
}
`;

export default GlobalStyle;