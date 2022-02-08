import React from "react";
import styled from 'styled-components';

//import components
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

// component styles
const Wrapper = styled.div`

    @media (min-width: 700px) {
        height: calc(100% - 64px);
        width: 100%;
        flex: auto;
        flex-direction: column;
        padding: 24px 0 64px 0;

        /* visual */
        background-color: black;
    }
`;

const Main = styled.main`
    height: calc(100%);
    width: 100vw;

    @media (min-width: 700px) {
        flex: 1;
        height: calc(100%);
        padding: 0;
    }
`;

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Wrapper>
                <Main>{children}</Main>
            </Wrapper>
            <Footer />
        </React.Fragment>
    );
};

export default Layout;