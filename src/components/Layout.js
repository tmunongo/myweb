import React from 'react'
import styled from 'styled-components'

//import components
import Footer from './Footer'
import Header from './Header'

// component styles
const Wrapper = styled.div`
  width: 100%;

  @media (min-width: 700px) {
    height: auto;
    flex: auto;
    flex-direction: column;
    padding: 0px 0px 0px 0px;
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
