import React from 'react'
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
    title: 'Tickets!',
    topics: ['React Native'],
    details:
      'The app allows a user to register an account and view all the available movies in the db. A user can customize their reservation by picking a location, watch time, day, and a seat. The app connects to an Express server running Apollo GraphQL. MongoDB is used for document storage while objects are stored on Cloudinary.',
    preview:
      'https://github.com/edtha3rd/tickets-mob/raw/master/live/home_page.gif',
    github: 'https://github.com/edtha3rd/tickets-mob',
  },
  {
    id: 3,
    title: 'Java Notepad',
    topics: ['Java'],
    details:
      "A simple, lightweight text editor is a programmer's best friend. The basic functionality of the text editor must allow a user to open a new text file, save a new text file, update an existing file, or open a file from the device. This is my implementation, in Java, of a notepad that checks the above mentioned boxes.",
    preview: 'https://github.com/edtha3rd/notepad/raw/master/notepad.jpg',
    github: 'https://github.com/edtha3rd/notepad',
  },
  {
    id: 4,
    title: 'Snake Game',
    topics: ['JavaScript'],
    details:
      'This is a web-based snake game in JavaScript. I chose this project to improve my understanding of how vanilla JavaScript refreshes rendered content and how to manually control this to implement something like a game engine.',
    preview: 'https://github.com/edtha3rd/snake-game/raw/master/gameplay.png',
    github: 'https://github.com/edtha3rd',
    link: 'https://edtha3rd.github.io/snake-game/',
  },
]

//styles
const Container = styled.div`
  width: fit-content;
`

const Head = styled.div`
  text-align: center;
`

const HeaderText = styled.h1`
  margin-top: 0px;
`

const Main = styled.h1`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  min-height: 100vh;
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
  return (
    <Page className="wifeBeater">
      <Head>
        <HeaderText>My Projects</HeaderText>
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
