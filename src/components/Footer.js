import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Github from '../img/icons/github.png'
import Instagram from '../img/icons/instagram.png'
import Medium from '../img/icons/medium-blue.png'
import Twitter from '../img/icons/twitter.png'
import BG from '../img/bg.jpg'

const Foot = styled.div`
  background: url(${BG}) repeat;
  border-top: 4px solid black;
  bottom: 0;
  color: white;
  margin: 0px 0px 0px 0px;
  text-align: centered;
  width: 100%;
`

const Icon = styled.img`
  height: 20px;
  width: auto;
  align-items: center;
  margin: 0px 10px 0px 10px;
`

const Quote = styled.h3`
  padding: 10px 45px 0px 45px;
  color: white;
  text-align: center;
  font-style: oblique;
  font-weight: 250;
  font-size: larger;
`

const License = styled.p`
  font-style: italic;
  margin-bottom: 0px;
  padding: 20px 45px 20px 45px;
  text-align: center;
`

const Footer = () => {
  return (
    <Foot>
      <Quote>
        "To live in the world without becoming aware of the meaning of the world{' '}
        <br></br>
        is like wandering about in a great library without touching the books."{' '}
        <br></br>
        <br></br>
        <strong>The Secret Teachings of All Ages</strong> <br></br>
      </Quote>
      <License>
        <div>
          <a href="https://github.com/edtha3rd">
            <Icon src={Github} alt="Github" />
          </a>
          <a href="https://twitter.com/edtha3rd">
            <Icon src={Twitter} alt="Github" />
          </a>
          <a href="https://instagram.com/ejta1da">
            <Icon src={Instagram} alt="Github" />
          </a>
          <a href="https://thoughtrealm.medium.com">
            <Icon src={Medium} alt="Github" />
          </a>
        </div>
        <Link to="/">Tawanda Munongo</Link> <br /> 2022-2022 All Rights
        Reserved.
      </License>
    </Foot>
  )
}

export default Footer
