import React, { useEffect, useState } from 'react'
import { IoCloseSharp, IoMenu } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SideBar from './SideBar'

const Burger = styled.div`
  color: #0077cc;
  cursor: pointer;
  display: block;
  padding: 25px 0px 0px 20px;
  z-index: 10;
  @media (min-width: 960px) {
    display: none;
    padding: 15px 0px 0px 20px;
  }
`

const HeaderBar = styled.div`
  background-color: black; //${({ theme }) => theme.colors.text}
  display: flex;
  height: 72px;
  justify-content: space-around;
  margin-bottom: 0px;
  position: sticky;
  top: 0;
  width: 100vw;
  z-index: 999;
  @media (max-width: 960px) {
    justify-content: space-between;
    padding-right: calc(5%);
  }
`

const LogoText = styled.h1`
  font-size: 20px;
  margin: 10px;
  padding: 20px 0px 0px 0px;
  @media (max-width: 960px) {
    margin: 0px;
    padding: 31px 0px 0px 0px;
    text-wrap: nowrap;
  }
`

const Nav = styled.nav`
  height: 72px;
  padding: 0px 70px 0px 0px;

  @media (max-width: 960px) {
    display: none;
  }
`

const NavList = styled.ul`
  margin: 10px;
  list-style-type: none;
  float: right;
  padding: 15px 20px 0px 0px;
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
    background: white;
    border-radius: 0.375rem;
    color: #584f4e;
    padding: 5px;
    transition: all 500ms;
  }
`

const ListItem = styled.li`
  display: inline;
  font-size: 18px;
  letter-spacing: 0.2rem;
  text-transform: capitalize;
  margin: 10px;
  @media screen(max-width: 768px) {
    font-size: 10px;
  }
`

const Header = () => {
  const [nav, setNav] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const nav = document.querySelector('#nav-bar')
      if (window.scrollY > 0) {
        nav.classList.add('add-shadow')
      } else {
        nav.classList.remove('add-shadow')
      }
    })
  })

  const handleNav = (e) => {
    e.preventDefault()
    setNav(!nav)
  }

  return (
    <HeaderBar id="nav-bar">
      <Burger onClick={(event) => handleNav(event)}>
        {nav ? <IoCloseSharp size={35} /> : <IoMenu size={35} />}
      </Burger>
      {/* Drop down nav menu */}
      <SideBar nav={nav} setNav={setNav} />
      <a href="/" style={{ textDecoration: 'none' }}>
        <LogoText className="headerName">Tawanda Munongo</LogoText>
      </a>
      {/* <Switch /> */}
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
          <ListItem className="navItem">
            <Link to="/projects">Projects</Link>
          </ListItem>
        </NavList>
      </Nav>
    </HeaderBar>
  )
}

export default Header
