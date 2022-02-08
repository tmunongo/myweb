import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import shared layout
import Layout from '../components/Layout';

//import routes
import Home from './home';
import About from './about';
import Writings from './writings';


//define routes
const Pages = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="about" element={<About />}></Route>
                    <Route path="writings" element={<Writings />}></Route>
                </Routes>
            </Layout>
        </Router>
    );
};

export default Pages;