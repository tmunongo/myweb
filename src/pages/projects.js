import React, { useEffect } from 'react'
import styled from 'styled-components'
import Project from '../components/Project'

//projects object
const projects = [
  {
    id: 1,
    title: 'Twitch UI',
    topics: ['NextJS', 'TailWind CSS'],
    details:
      'I built the UI for the Twitch live-streaming site using NextJS and Tailwind CSS. Working authentication is implemented using NextAuth allowing users to log in with a Google or Github account.',
    preview: 'https://github.com/edtha3rd/twitch-next/raw/main/home_page.png',
    github: 'https://github.com/edtha3rd/twitch-next',
    link: 'https://twitch-next-nu.vercel.app/',
  },
  {
    id: 2,
    title: 'Country Query',
    topics: ['JavaScript', 'Bootstrap'],
    details:
      'This is a simple website for finding out information about different countries around the world. It uses the REST Countries API to retrieve details like country name, capital city, region, population, currency, flag, and more.',
    preview:
      'https://github.com/edtha3rd/countries-web/raw/master/screenshots/countries.png',
    github: 'https://github.com/edtha3rd/countries-web',
    link: 'https://country-query.surge.sh/',
  },
  {
    id: 3,
    title: 'Tickets!',
    topics: ['React Native', 'GraphQL', 'MongoDB'],
    details:
      'The app allows a user to register an account and view all the available movies in the database. A user can customize their reservation by picking a location, watch time, day, and a seat.',
    preview:
      'https://github.com/edtha3rd/tickets-mob/raw/master/live/home_page.gif',
    github: 'https://github.com/edtha3rd/tickets-mob',
  },
  {
    id: 4,
    title: 'Java Notepad',
    topics: ['Java'],
    details:
      "A simple, lightweight text editor is a programmer's best friend. The basic functionality of the text editor must allow a user to open a new text file, save a new text file, update an existing file, or open a file from the device.",
    preview: 'https://github.com/edtha3rd/notepad/raw/master/notepad.jpg',
    github: 'https://github.com/edtha3rd/notepad',
  },
  {
    id: 5,
    title: 'Snake Game',
    topics: ['JavaScript'],
    details:
      'This is a web-based snake game in JavaScript. I chose this project to improve my understanding of how vanilla JavaScript refreshes rendered content and how to manually control this to implement something like a game engine.',
    preview: 'https://github.com/edtha3rd/snake-game/raw/master/gameplay.png',
    github: 'https://github.com/edtha3rd',
    link: 'https://edtha3rd.github.io/snake-game/',
  },
  {
    id: 6,
    title: 'Hair By X',
    topics: ['GatsbyJS', 'Styled Components'],
    details:
      'A static site landing page designed and built for a fashion brand selling hair pieces.',
    preview: 'https://github.com/edtha3rd/snake-game/raw/master/gameplay.png',
    github: 'https://github.com/edtha3rd/hair-by-a',
    link: 'https://hairbya.gatsbyjs.io/',
  },
]

//styles
const Container = styled.div`
  width: fit-content;
`

const Head = styled.div`
  align-items: center;
  display: flex;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 16px;
    // display: none;
  }
`

const HeaderText = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 26px;
  margin: 0px 0px 0px 20px;
  @media (max-width: 768px) {
    font-size: 18px;
    margin: 0px 0px 0px 10px;
    // display: none;
  }
`

const Line = styled.div`
  background: #288a8a;
  height: 1px;
  margin-left: 20px;
  margin-bottom: 20px;
  width: 280px;
  @media (max-width: 768px) {
    width: 140px;
  }
`

const Main = styled.h1`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-height: 100vh;
  @media (max-width: 1560px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
const Page = styled.div`
  border-radius: 0.3rem;
  margin: 4% 8%;
  padding: 16px;
  @media (max-width: 768px) {
    margin: 5% 5%;
  }
`

const Projects = () => {
  useEffect(() => {
    document.title = 'Tawanda Munongo - Projects'
  })
  return (
    <Page className="wifeBeater">
      <Head>
        <HeaderText className="heading">Some of My Work</HeaderText>
        <Line style={{}}></Line>
      </Head>
      <Main>
        {projects.map((item, index) => (
          <Container key={index}>
            <Project
              title={item.title}
              topics={item.topics}
              details={item.details}
              preview={item.preview}
              github={item.github}
              link={item.link}
            />
          </Container>
        ))}
      </Main>
    </Page>
  )
}

export default Projects
