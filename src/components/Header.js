import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';


const HeaderBar = styled.header`
  height: 96px;
  float: left;
  background-color: #000;
  width: 56vw;
  margin-bottom: 20px;
`;

const LogoText = styled.h1`
  margin: 0;
  padding: 20px 0px 0px 80px;
  color: #e4e8e9;
`;

const Nav = styled.nav`
    padding: 0px 80px 0px 0px;
    width: 40vw;
    float: right;
    height: 96px;

    background-color: black;

    @media (max-width: 750px) {
    }

    @media (min-width: 750px) {
        padding: 0px 0px 0px 0px;
    }
`;

const NavList = styled.ul`
    margin: 10px;
    list-style-type: none;
    float: right;
    padding: 15px 36px 0px 0px;
    color: #e4e8e9;

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
    text-decoration-thickness: 4px;
    text-underline-offset: 6px;
    display: inline;
    margin: 10px;
`;

const Header = () => {
  return (
    <div>
        <HeaderBar>
            <LogoText>Tawanda Munongo</LogoText>
        </HeaderBar>
        <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right />
        <Nav>
            <NavList>
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
    </div>
    );
};

export default Header;