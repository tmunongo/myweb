import React, { useEffect } from 'react';
//import { useQuery } from '@apollo/client';
import styled from 'styled-components';

//import components
import homeCover from '../img/spiderwave.jpg';

//styling
const CoverImage = styled.div`
    
`;

const Image = styled.img`
    position: relative;
    margin: 0px;
    width: 100vw;
    height: auto;
    border-top: solid white;
    border-bottom: solid white;

    @media (min-width: 700px) {
        padding-left: 0px;
        width: 100vw;
        height: 70vh;
    }
`;

const Body = styled.div`
    color: white;

    @media (min-width: 700px) {
        padding: 0px calc(100% - 75%) 0px calc(100% - 75%);
    }

    @media (max-width: 700px) {
        padding-left: 5px;
    }
`;

const Main = styled.div`
    
`;

const Home = () => {

    useEffect(() => {
        document.title = 'Tawanda Munongo - HomePage';
    })

    return (
            <Main>
                <CoverImage >
                    <Image  src={homeCover} alt='MyCover' />
                </CoverImage>
                <Body>
                    <h1>Home of Pilgrims</h1>
                    <p>Welcome, traveller</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla 
                        pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est 
                        laborum.</p>
                </Body>
            </Main>
    );
};

export default Home;