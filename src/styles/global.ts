import { createGlobalStyle } from 'styled-components'

import TitilliumWeb from '../assets/fonts/TitilliumWeb-Regular.ttf'

export default createGlobalStyle`

@font-face {
    font-family: 'TitilliumWeb';
    src: local('TitilliumWeb'),
    url(${TitilliumWeb}) format('truetype');
  }
  html {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #f6f7fb;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'TitilliumWeb', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  p {
    font-weight: 300;
  }

  ul {
    list-style-type: none;
  }
/* ------------------------------- */


  /* .main-content {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    justify-content: center;
    flex-direction: column;
    background-color: ${props => props.theme.colors.gray1};

    @media screen and (max-width: 1280px) {
      margin-top: 14px;
    }
  } */
`
