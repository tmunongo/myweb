import React, { useEffect } from 'react';
//import { useQuery } from '@apollo/client';
//import components


const About = () => {
    useEffect(() => {
        document.title = 'Tawanda - About';
    })

    return (
            <div>
                <h1>About the shepherd</h1>
                <p>This is a page about me</p>
            </div>
    );
};

export default About;