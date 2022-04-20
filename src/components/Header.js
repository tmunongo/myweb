import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'
import Astro from '../assets/a-astro-space-font/AstroSpace.ttf'

const Burger = styled.div`
  @media (min-width: 700px) {
    display: none;
    padding-left: 20px;
  }
`

const HeaderBar = styled.header`
  height: 72px;
  background-color: #000;
  width: calc(100%);
  margin-bottom: 0px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding-right: calc(5%);
  }
`

const LogoText = styled.h1`
  margin: 0;
  padding: 20px 0px 0px 0px;
  color: #e4e8e9;
  font-size: 24px;
  @media (max-width: 768px) {
  }
`

const Nav = styled.nav`
  padding: 0px 80px 0px 0px;
  height: 72px;

  background-color: black;

  @media (max-width: 750px) {
    display: none;
  }

  @media (min-width: 750px) {
    padding: 0px 0px 0px 0px;
  }
`

const NavList = styled.ul`
  margin: 10px;
  list-style-type: none;
  float: right;
  padding: 15px 40px 0px 0px;
  color: #333;

  /* We can nest styles in styled-components */
  /* The following styles will apply to links within the NavList component */
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #e4e8e9;
  }

  a:visited {
    color: #b4b4b4;
  }

  a:hover,
  a:focus {
    color: #0077cc;
  }
`

const ListItem = styled.li`
  font-style: normal;
  font-stretch: regular;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  display: inline;
  margin: 10px;
  @media screen(max-width: 768px) {
    font-size: 10px;
  }
`

const Header = () => {
  return (
    <HeaderBar>
      <Burger>
        <SideBar
          pageWrapId={'page-wrap'}
          outerContainerId={'outer-container'}
        />
      </Burger>
      <a href="/">
        <LogoText className="headerName">Tawanda Munongo</LogoText>
      </a>
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
          <ListItem>Projects</ListItem>
        </NavList>
      </Nav>
    </HeaderBar>
  )
}

export default Header
