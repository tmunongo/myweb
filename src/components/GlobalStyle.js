import normalize from 'normalize.css'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
${normalize}
  
  a:link,
  a:visited {
    color: ${({ theme }) => theme.colors.link.text};
  }

  a:hover,
  a:focus {
    color: #004499;
  }
  *, *:before, *:after {
    box-sizing: border-box;
  }
  .blogContent {
      color: ${({ theme }) => theme.colors.text};
      font-family: 'Nixie';
      font-size: 1.5rem;
      @media (max-width: 768px){
        font-size: 1rem;
        text-justify: auto;
      }
    }
  
  body,
  html {
    background-color: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    height: 100%;
    margin: 0;
    transition: all 0.50s linear;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: ${({ theme }) => theme.colors.body};
    line-height: 1.4;
  }

  

  code,
  pre {
    max-width: 100%;
    overflow: auto;
    margin: 0 auto;
  }

  .dropMenu {
    background-color: ${({ theme }) => theme.colors.body}
  }
  
  .postList:hover,
  .postList:focus {
    background-color: ${({ theme }) => (theme.light ? '#e3e3e3' : '#757575')};
    border-radius: 0.375rem;
    box-shadow: 3px 3px 5px black;
    color: black;
    z-index: 35;
    transition: all 0.5s;
  }

  .switch {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  .switch-bar {
    background: ${({ theme }) => theme.colors.header};
    height: 1px;
  }

  .switch-button {
    background: ${({ theme }) => theme.colors.secondary};
  }

  .switch-label {
    align-items: center;
    background: white;
    border-radius: 100px;
    cursor: pointer;
    display: flex;
    height: 25px;
    justify-content: space-between;
    left: 48vw;
    position: absolute;
    top: 33px;
    transition: background-color .2s;
    width: 50px;
    @media (max-width: 768px){
      height: 20px;
      left: 72px;
      top: 30px;
      width: 40px;
    }
  }

  .switch-label .switch-button {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 25px;
    height: 20px;
    border-radius: 45px;
    transition: 0.2s;
    color: ${({ theme }) => theme.colors.headerText};
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
    @media (max-width: 768px){
      height: 15px;
      width: 20px;
    }
  }

  .switch:checked + .switch-label .switch-button {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  .switch-label:active .switch-button {
    width: 60px;
  }
  
  .headerName {
    color: ${({ theme }) => theme.colors.headerText};
    font-family: 'AstroSpace';
  }

  .navItem {
    color: ${({ theme }) => theme.colors.headerText};
  }
  
  .welcome {
    color: ${({ theme }) => theme.colors.text};
    font-family: 'AstroSpace';
  }


  .wifeBeater {
    background-color: ${({ theme }) => theme.colors.secondary}
  }
  `
