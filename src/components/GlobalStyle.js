import { createGlobalStyle } from 'styled-components'
import normalize from 'normalize.css'

export default createGlobalStyle`
  ${normalize}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body,
  html {
    color: bisque;
    height: 100%;
    margin: 0;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    background-color: #252522;
    line-height: 1.4;
  }

  a:link,
  a:visited {
    color: #0077cc;
  }

  a:hover,
  a:focus {
    color: #004499;
  }

  code,
  pre {
    max-width: 100%;
    overflow: auto;
    margin: 0 auto;
  }



  .postList:hover,
  .postList:focus {
    background-color: #ffffff;
    border-radius: 0.375rem;
    color: black;
    z-index: 35;
    box-shadow: 5px 5px 5px black;
  }
  
  .headerName {
    font-family: "AstroSpace";
  }
`
