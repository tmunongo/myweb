import React, { useEffect } from 'react';
//import { useQuery } from '@apollo/client';
//import components


const Writings = () => {
    useEffect(() => {
        document.title = 'Tawanda - Writings';
    })

    return (
            <div>
                <h1>Writings</h1>
                <p>The things that I have written</p>
            </div>
    );
};

export default Writings;