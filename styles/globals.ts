import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height:100%;
    min-height: 100%;
    background: var(--primary);
  }

  html {
    min-height: 100%;
    background: var(--primary);
  }

  body, input, button {
    font-size: 14px;
    font-family: 'Roboto', Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  svg {
    cursor: pointer;
  }

  ul {
    list-style:none;
  }

  h1 {
    font-family: 'Anton', Helvetica, Arial;
    color: var(--black);
  }

  p {
    color: var(--black);
  }

  textarea ,button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BLinkMacSystemFont, Segoe, UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
    color: var(--black);
    transition: color .3s ease-out;
  }

  li {
    list-style-type: none;
    text-transform: uppercase;
    font-family: 'Anton', Helvetica, Arial;
    font-size: 30px;
    cursor: pointer;
  }

  a {
    text-decoration:none;
  }

  ul {
    list-style: none;
  }

  :root {
    ${(props) => {
      const theme = props.theme;
      let append = "";
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });
      return append;
    }}
  }
`;