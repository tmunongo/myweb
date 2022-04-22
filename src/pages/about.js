import React, { useEffect } from 'react'
import styled from 'styled-components'
import Avatar from '../img/profilepic.jpg'

//import { useQuery } from '@apollo/client';
//import components

const Page = styled.div`
  display: grid;
  background-color: black;
  grid-template-rows: [start] 30% [middle] 30% [last] 40% [end];
  grid-template-columns: [start] 20% [first] 20% [second] 40% [third] 20% [end];
  padding-top: 10px;
`

const Me = styled.img`
  grid-row: 1;
  grid-column: 1;
  grid-row-start: start;
  grid-column-start: second;
  grid-row-end: middle;
  grid-column-end: second;
  height: auto;
  width: 45%;
  padding-bottom: 10px;
  @media (max-width: 700px) {
    grid-row-start: start;
    grid-row-end: middle;
    grid-column-start: first;
    height: 200px;
    padding-top: 15px;
    width: auto;
    align-self: center;
  }
`

const Body = styled.div`
  grid-row: 2;
  grid-column: 2;
  grid-row-start: last;
  grid-column-start: first;
  grid-row-end: end;
  grid-column-end: third;
  align-items: flex-end;
  color: #b4b4b4;
  padding: 0px 10px 0px 10px;
  @media (max-width: 700px) {
    grid-row-start: middle;
    grid-column-start: start;
    grid-row-end: end;
    grid-column-end: end;
    padding-top: 15px;
  }
`

const Text = styled.span``

const About = () => {
  useEffect(() => {
    document.title = 'Tawanda - About'
  })

  return (
    <Page>
      <Me src={Avatar} alt="my-avatar" />
      <Body>
        <Text>
          Hello! My name is <strong>Tawanda Munongo </strong>. I'm presently in
          the final year of my Computer Science degree. My interests are web
          development and cross-platform mobile development using frameworks
          such as React-Native, Django, and Flutter. <br /> <br /> I have been
          writing for most of my life, but only began sharing my work 5 years
          ago. I write both fiction and non-fiction, touching on a wide range of
          subjects from philosophy and technology, to science fiction and
          literary fiction. <br />
          <br /> My fiction has been published online in a number of magazines
          including{' '}
          <a href="http://bmpvoices.com/issue-3-robots/">
            Ab Terra Flash Fiction{' '}
          </a>{' '}
          and <a href="https://www.rushmagazine.org/">The Rush Magazine</a>. You
          can find my earlier writings on my{' '}
          <a href="https://thoughtrealm.medium.com">Medium</a> page.
        </Text>
      </Body>
    </Page>
  )
}

export default About
