import { createGlobalStyle } from 'styled-components';

import bgImg from '../assets/BG_IMG.svg'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: url(${bgImg}) no-repeat top;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  margin-bottom: 120px;
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

/* Editor Grid Layout */
.editor {
  margin: 0px;
  display: grid;
  grid-template-columns: 225px 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas: 
    "logo header"
    "menu content";
  /* height: 100vh; */
  background-color: #F5F5F5;
}

aside.logo {
  grid-area: logo;
}

aside.header {
  grid-area: header;
}

aside.menu-area {
  grid-area: menu;
}

main.content {
  grid-area: content;
}

@media(max-width: 768px) {
  .editor {
    grid-template-rows:
      100px
      70px
      1fr;
    grid-template-columns: 225px 1fr;
    grid-template-areas:
      "logo header"
      "menu menu"
      "content content";
  }
}

@media(max-width: 576px) {
  .editor {
    grid-template-rows:
      100px
      70px
      1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "logo"
      "menu"
      "content";
  }
}
`;

export default GlobalStyle;