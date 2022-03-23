import React, { useEffect } from 'react';
import styled from 'styled-components';
import Avatar from '../img/profilepic.jpg';

//import { useQuery } from '@apollo/client';
//import components

const Page = styled.div`
    display: grid;
    grid-template-rows: [start] 40% [middle] 40% [last] 20% [end];
    grid-template-columns: [start] 20% [first] 20% [second] 40% [third] 20% [end]
`

const Me = styled.img`
    grid-row: 1;
    grid-column: 1;
    grid-row-start: start;
    grid-column-start: first;
    grid-row-end: middle;
    grid-column-end: second;
    height: auto;
    width: 35%;
`

const Body = styled.div`
    grid-row: 2;
    grid-column: 2;
    grid-row-start: middle;
    grid-column-start: first;
    grid-row-end: end;
    grid-column-end: second;
    align-items: flex-end;
`

const Text = styled.span`

`

const About = () => {
    useEffect(() => {
        document.title = 'Tawanda - About';
    })

    return (
            <Page>
                <Me src={Avatar} alt="my-avatar" />
                <Body>
                    <Text>
                        <strong>Tawanda Munongo </strong>
                        is a writer and student. 
                        He is currently pursuing a degree in Computer Science and Technology. 
                        His work has been published in Literary Heist and 
                        Ab Terra Flash Fiction Magazines.
                    </Text>
                </Body>
            </Page>
    );
};

export default About;