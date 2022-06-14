import React from 'react'
import styled from 'styled-components'

//import components
import Header from './Header'
import Footer from './Footer'

// component styles
const Wrapper = styled.div`
  width: 100%;
  background-color: black;

  @media (min-width: 700px) {
    height: auto;
    flex: auto;
    flex-direction: column;
    padding: 0px 0px 64px 0px;

    /* visual */
    background-color: black;
  }
`

const Main = styled.main`
  height: calc(100%);
  max-width: calc(100%);

  @media (min-width: 700px) {
    height: auto;
  }
`

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Wrapper>
        <Main>{children}</Main>
      </Wrapper>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
