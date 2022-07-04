import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'
import { IoMenu, IoCloseSharp } from 'react-icons/io5'

const Burger = styled.div`
  color: white;
  cursor: pointer;
  display: block;
  padding: 20px 0px 0px 20px;
  z-index: 10;
  @media (min-width: 768px) {
    display: none;
  }
`

const HeaderBar = styled.header`
  background-color: #000;
  display: flex;
  height: 72px;
  justify-content: space-around;
  margin-bottom: 0px;
  width: 100vw;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding-right: calc(5%);
  }
`

const LogoText = styled.h1`
  color: #e4e8e9;
  font-size: 20px;
  margin: 10px;
  padding: 20px 0px 0px 0px;
  @media (max-width: 768px) {
    margin: 0px;
    padding: 25px 0px 0px 0px;
  }
`

const Nav = styled.nav`
  padding: 0px 80px 0px 0px;
  height: 72px;


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
    font-size: 1.3em;
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
  display: inline;
  font-size: 18px;
  letter-spacing: .2rem;
  text-transform: capitalize;
  margin: 10px;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  @media screen(max-width: 768px) {
    font-size: 10px;
  }
`


const Header = () => {
  const [nav, setNav] = useState(false)

    const handleNav = (e) => {
      e.preventDefault()
      setNav(!nav)
    }

  return (
    <HeaderBar>
      <Burger onClick={event => handleNav(event)}>
        {
            nav 
            ? <IoCloseSharp size={35} />
            : <IoMenu size={35} />
                     
        }
      </Burger>
      {/* Drop down nav menu */}
      <SideBar 
        nav={nav} 
      />
      <a href="/" style={{ textDecoration: 'none' }}>
        <LogoText className="headerName">Tawanda Munongo</LogoText>
      </a>
      <Nav>
        <NavList>
          <ListItem>
            <Link className="navItem" to="/">
              Home
            </Link>
          </ListItem>
          <ListItem className="navItem">
            <Link to="/about">About</Link>
          </ListItem>
          <ListItem className="navItem">
            <Link to="/writings">Writings</Link>
          </ListItem>
          <ListItem className="navItem">Projects</ListItem>
        </NavList>
      </Nav>
    </HeaderBar>
  )
}

export default Header
