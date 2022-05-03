import { createGlobalStyle } from 'styled-components'
import normalize from 'normalize.css'

export default createGlobalStyle`
  ${normalize}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
    margin: 0;
    color: bisque;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    background-color: #252522;
    line-height: 1.4;
    background-color: 'black';
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

  @font-face {
    font-family: "AstroSpace";
    src: local("AstroSpace"),
      url("../assets/a-astro-space-font/AstroSpace.ttf") format("truetype");
  }

  @font-face {
    font-family: "Montserrat";
    src: local("Montserrat"),
      url("../assets/montserrat/Montserrat-Italic-VariableFont_wght") format("truetype");
    font-weight: 300;
  }

  @font-face {
    font-family: "Anurati";
    src: local("Anurati"),
      url("../assets/anurati_font/Anurati_Regular.otf");
  }

  .blogContent {
    font-family: "Montserrat";
  }
  
  .js-scroll {
    opacity: 0;
    transition: opacity 500ms;
  }

  js-scroll.scrolled {
    opacity: 1;
  }

  .scrolled.fade-in {
    animation: fade-in 1s ease-in-out both;
  }

  .postList:hover,
  .postList:focus {
    background-color: #6ecfe1;
    border-radius: 0.375rem;
    color: black;
    z-index: 35;
    box-shadow: 5px 5px 5px black;
  }
  
  .headerName {
    font-family: "AstroSpace";
  }
`
