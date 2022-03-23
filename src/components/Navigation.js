import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SideBar from './SideBar';

const Nav = styled.nav`
    height: 100px;
    padding-top: 20px;
`;

const NavList = styled.ul`
    margin: 10px;
    display: inline;
    list-style-type: none;
    line-height: 2;
    float: right;
    padding-right: 64px;


    /* We can nest styles in styled-components */
    /* The following styles will apply to links within the NavList component */
    a {
        text-decoration: none;
        font-weight: bold;
        font-size: 1.1em;
        color: #333;
    }

    a:visited {
        color: #333;
    }

    a:hover,
    a:focus {
        color: #0077cc;
    }
`;

const ListItem = styled.li`
    font-style: normal;
    font-stretch: regular;
    text-transform: capitalize;
    font-weight: bold;
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 8px;
    display: inline;
    margin: 10px;
`;

const Navigation = () => {
    return (
        <Nav>
            <NavList>
                <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right />
                <ListItem>
                    <Link to="/">Home</Link>
                </ListItem>
                <ListItem>
                    <Link to="/about">About</Link>
                </ListItem>
                <ListItem>
                    <Link to="/writings">Writings</Link>
                </ListItem>
                <ListItem>
                    Projects
                </ListItem>
            </NavList>
        </Nav>
    );
};

export default Navigation;