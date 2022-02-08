import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Foot = styled.div`
    position: relative;
    background-color: #1f1f1f;
    color: white;
    width: 100%;
    border-top: 4px solid white;
    text-align: centered;
    margin: 0;
    bottom: 0;
`;

const Quote = styled.h3`
    padding: 10px 45px 0px 45px;
    color: white;
    text-align: center;
    font-style: oblique;
    font-weight: 250;
    font-size: larger;
`;

const License = styled.p`
    text-align: center;
    font-style: italic;
    padding: 20px 45px 20px 45px;
`;

const Footer = () => {
    return (
        <Foot>
            <Quote>
            "To live in the world without becoming aware of the meaning of the world <br></br>
            is like wandering about in a great library without touching the books." <br></br>
            <br></br><strong>The Secret Teachings of All Ages</strong> <br></br>
            </Quote>
            <License>
            <Link to="/">Tawanda Munongo</Link>. The source code is licensed under
            <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.<br></br> The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </License>
        </Foot>
    );
};

export default Footer;