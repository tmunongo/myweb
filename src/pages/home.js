import React, { useCallback, useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ScrollIndicator from '../components/ScrollIndicator'
import Thinker from '../img/thinker-nobg-prism.jpg'

//styling
const Button = styled.span`
  align-self: center;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  justify-self: center;
  margin-top: 10px;
  padding: 3px 10px;
  text-decoration: none;
  width: 40vw;
`

const Card = styled.div`
  display: flex;
  overflow: auto;
  padding: 30px;
  width: 65vw;
  @media (max-width: 768px) {
    padding: 10px;
    width: 90vw;
  } ;
`

const Carousel = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 100px auto;
  padding: 0;
`

const Head = styled.h1`
  margin: 0px 0px 10px 0px;
  text-align: center;
  justify-content: center;
`

const Heading2 = styled.h2`
  text-align: center;
  width: 100vw;
  @media (max-width: 768px) {
    margin: 0 0;
  }
`

const Page = styled.div`
  align-items: center;
  color: white;
  display: grid;
  height: 100vh;
  min-height: 450px;

  @media (min-width: 768px) {
    padding: 0px 5% 0px 5%;
    justify-content: space-around;
  }

  @media (max-width: 768px) {
  }
`

const Para = styled.div`
  margin-block-start: 0;
  margin-block-end: 5;
  margin: 0px 5px 0px 5px;
`

const Preview = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`

const Portfolio1 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 25vh;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100vw;
  }
`

const Portfolio2 = styled.div`
  height: 60vh;
`

const Portfolio3 = styled.div`
  height: 15vh;
`

const PortIntro = styled.p`
  display: flex;
  font-size: 18px;
  margin: 0px 0px;
  width: 50vw;
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: justify;
    width: 95vw;
  }
`

const ThinkerImage = styled.img`
  display: flex;
  height: calc(60%);
  width: calc(15%);
  @media (max-width: 700px) {
    display: none;
  }
`

const Tops = styled.div`
  flex: row;
`

//projects object
const projects = [
  {
    id: 1,
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
    title: 'Twitch UI',
    topics: ['NextJS', 'Tailwind CSS'],
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
    id: 5,
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

const determineClasses = (indices, projectIndex) => {
  if (indices.currentIndex === projectIndex) {
    return 'active'
  } else if (indices.nextIndex === projectIndex) {
    return 'next'
  } else if (indices.previousIndex === projectIndex) {
    return 'prev'
  }
  return 'inactive'
}

const Home = () => {
  const [indices, setIndices] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  })

  const handleCardChange = useCallback(() => {
    //start again after reaching end but carry prev value over
    if (indices.currentIndex >= projects.length - 1) {
      setIndices({
        previousIndex: projects.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      })
    } else {
      setIndices((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === projects.length
            ? 0
            : prevState.currentIndex + 2,
      }))
    }
  }, [indices.currentIndex])

  useEffect(() => {
    document.title = 'Tawanda Munongo - HomePage'
  })

  return (
    <React.Fragment>
      {/* <ScrollContainer> */}
      {/* first home page section */}
      <Page style={{ height: 'calc(100vh - 72px)' }}>
        <Head className="welcome">Welcome, traveller</Head>
        <Fade bottom>
          <Para className="blogContent" style={{ textAlign: 'center' }}>
            My name is Tawanda.
            <br />I build websites and cross-platform mobile applications.
            <br />
            <br /> I also write fiction and non-fiction, exploring the
            intersection of technology and our existent ways of life.{' '}
          </Para>
        </Fade>
        <Link
          style={{
            backgroundColor: 'teal',
            borderRadius: '5px',
            color: 'white',
            fontWeight: 'bold',
            justifySelf: 'center',
            padding: '3px 10px',
            textAlign: 'center',
            textDecoration: 'none',
            width: 'auto',
          }}
          to="/about"
        >
          MORE ABOUT ME
        </Link>
        <ScrollIndicator />
      </Page>
      {/* second home page section */}
      <Page
        style={{
          borderTop: '0.5px solid grey',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Portfolio1 className="blogContent">
          <Fade bottom>
            <div>
              <Heading2>My Portfolio</Heading2>
            </div>
          </Fade>
          <Fade bottom>
            <PortIntro>
              My goals, whenever I select a new project to take on, are always
              to challenge myself and learn something new. For the last 4 years,
              I have worked on numerous projects in many programming languages,
              most of them as part of my CS coursework.
            </PortIntro>
          </Fade>
        </Portfolio1>
        <Portfolio2>
          <Carousel className="projects-carousel">
            {projects.map((project, index) => (
              <li
                key={project.id}
                className={`project ${determineClasses(indices, index)}`}
              >
                <Card>
                  <div style={{ flex: 0 }}>
                    <Preview
                      src={project.preview}
                      alt={project.title}
                      style={{ height: '30vh', maxWidth: '400px' }}
                    />
                  </div>
                  <div style={{ flex: 1, marginLeft: '10px' }}>
                    <h2>{project.title}</h2>
                    <Tops>
                      {project.topics.map((item, index) => (
                        <span
                          key={index}
                          style={{
                            borderRadius: '0.5rem',
                            backgroundColor: 'pink',
                            color: 'black',
                            fontSize: '12px',
                            margin: '1px 1px',
                            padding: '5px',
                            width: 'fit-content',
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </Tops>
                    <p
                      style={{ marginBottom: '5px', textOverflow: 'ellipsis' }}
                    >
                      {project.details}
                    </p>
                    <a href={project.github}>
                      <Button
                        style={{ backgroundColor: 'purple', width: 'auto' }}
                      >
                        Github
                      </Button>
                    </a>
                    {project.link ? (
                      <a href={project.link}>
                        <Button
                          style={{
                            backgroundColor: 'teal',
                            marginLeft: '5px',
                          }}
                        >
                          Live Demo
                        </Button>
                      </a>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </Card>
              </li>
            ))}
          </Carousel>
        </Portfolio2>
        <Portfolio3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Button
              onClick={handleCardChange}
              style={{
                backgroundColor: 'teal',
                borderRadius: '5px',
                color: 'white',
                cursor: 'grab',
                padding: '10px',
                textAlign: 'center',
              }}
            >
              Next Item
            </Button>
            <Link
              to="/projects"
              style={{
                alignSelf: 'center',
                backgroundColor: 'darkgoldenrod',
                borderRadius: '5px',
                color: 'white',
                fontWeight: 'bold',
                marginTop: '1vh',
                padding: '10px',
                textAlign: 'center',
                textDecoration: 'none',
                width: '40vw',
              }}
            >
              All My Projects
            </Link>
          </div>
        </Portfolio3>
      </Page>
      <Page style={{ background: 'black', borderTop: '0.5px solid grey' }}>
        <ThinkerImage src={Thinker} alt="thinker" />
      </Page>
      {/* </ScrollContainer> */}
    </React.Fragment>
  )
}

export default Home
