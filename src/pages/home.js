import React, { useContext, useEffect } from 'react'
import { IoLinkOutline, IoLogoGithub } from 'react-icons/io5'
import { Fade } from 'react-reveal'
import { Link } from 'react-router-dom'
import styled, { ThemeContext } from 'styled-components'
import ScrollIndicator from '../components/ScrollIndicator'

//styling
const Button = styled.button`
  background-color: #28dc2e;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  justify-self: center;
  padding: 3px 10px;
  text-align: center;
  text-decoration: none;
  width: auto;
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

const Links = styled.div`
  display: flex;
`

const Page = styled.div`
  align-items: center;
  color: white;
  display: grid;
  min-height: 450px;

  @media (min-width: 768px) {
    padding: 0px 5% 0px 5%;
    justify-content: space-around;
  }

  @media (max-width: 768px) {
  }
`

const Para = styled.div`
  font-size: 1.5rem;
  margin-block-start: 0;
  margin-block-end: 5;
  margin: 0px 5px 0px 5px;
`

const Preview = styled.img`
  border-radius: 0.375rem;
  height: auto;
  width: 100%;
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

const Portfolio2 = styled.div``

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

const ProjectContainer = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 0.375rem;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  height: 360px;
  margin: 15px 20px;
  padding: 10px;
  width: 60vw;
  @media (max-width: 1280px) {
    margin: 15px 0px;
    width: 95vw;
  }
`

const ProjectInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const ProjectLast = styled.div`
  align-items: center;
  display: flex;
  justify-content: end;
  @media (max-width: 768px) {
    max-width: 100vw;
    justify-content: center;
  }
`

const ProjectPreview = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0px 5px;
`

const Tops = styled.div`
  flex: row;
  margin: 15px;
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
    github: 'https://github.com/edtha3rd/snake-game',
    link: 'https://edtha3rd.github.io/snake-game/',
  },
  {
    id: 5,
    title: 'Hair By A',
    topics: ['GatsbyJS', 'Styled Components'],
    details:
      'A landing site for a fashion brand specializing in top-of-the-range hair products.',
    preview:
      'https://github.com/edtha3rd/hair-by-a/blob/master/src/images/hairbya-sc.png',
    github: 'https://github.com/edtha3rd/hair-by-a',
    link: 'https://hairbya.gatsbyjs.io/',
  },
]

const Home = () => {
  const theme = useContext(ThemeContext)

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
          <Para className="blogContent" style={{ textAlign: 'left' }}>
            I'm Tawanda.
            <br />I contribute to this shared wonderland that we call the web.
            <br />
            I believe that function doesn't always have to eclipse form. Useful
            things can be beautiful, too.
            <br />
            <br /> I also write fiction and non-fiction, exploring the
            intersection of technology and our existent ways of life.{' '}
          </Para>
        </Fade>
        <Link
          style={{
            backgroundColor: '#288a8a',
            borderRadius: '5px',
            color: 'black',
            fontWeight: 'bold',
            justifySelf: 'start',
            marginLeft: '5px',
            padding: '10px 10px',
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
          // backgroundColor: '#121713',
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
            <PortIntro className="blogContent">
              My goals, whenever I select a new project to take on, are always
              to challenge myself and learn something new.
            </PortIntro>
          </Fade>
        </Portfolio1>
        <Portfolio2>
          <Fade left>
            <ProjectContainer>
              <ProjectInfo style={{ textAlign: 'left' }}>
                <p
                  style={{
                    borderRadius: '0.375rem',
                    background: 'whitesmoke',
                    color: '#288a8a',
                    fontStyle: 'italic',
                    marginBottom: '0px',
                    padding: '6px 12px',
                  }}
                >
                  FEATURED PROJECT
                </p>
                <h2 style={{ marginTop: '0px' }}>{projects[0].title}</h2>
                <p className="blogContent" style={{ fontSize: '14px' }}>
                  {projects[0].details}
                </p>
                <Tops>
                  {projects[0].topics.map((item, index) => (
                    <span
                      key={index}
                      style={{
                        borderRadius: '0.5rem',
                        backgroundColor: '#288a8a',
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
                <Links>
                  <a href={projects[0].github}>
                    <IoLogoGithub
                      size={20}
                      style={{ margin: '5px', color: '#288a8a' }}
                    />
                  </a>
                  <a href={projects[0].link}>
                    <IoLinkOutline
                      size={20}
                      style={{ margin: '5px', color: '#288a8a' }}
                    />
                  </a>
                </Links>
              </ProjectInfo>
              <ProjectPreview>
                <Preview src={projects[0].preview} />{' '}
              </ProjectPreview>
            </ProjectContainer>
          </Fade>
          <Fade right>
            <ProjectContainer>
              <ProjectPreview>
                <Preview src={projects[5].preview} />{' '}
              </ProjectPreview>
              <ProjectInfo style={{ textAlign: 'right' }}>
                <h2>{projects[5].title}</h2>
                <p className="blogContent" style={{ fontSize: '14px' }}>
                  {projects[5].details}
                </p>
                <Tops>
                  {projects[5].topics.map((item, index) => (
                    <span
                      key={index}
                      style={{
                        borderRadius: '0.5rem',
                        backgroundColor: '#288a8a',
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
                <Links>
                  <a href={projects[5].github}>
                    <IoLogoGithub
                      size={20}
                      style={{ margin: '5px', color: '#288a8a' }}
                    />
                  </a>
                  <a href={projects[5].link}>
                    <IoLinkOutline
                      size={20}
                      style={{ margin: '5px', color: '#288a8a' }}
                    />
                  </a>
                </Links>
              </ProjectInfo>
            </ProjectContainer>
          </Fade>
          <Fade left>
            <ProjectContainer>
              <ProjectInfo style={{ textAlign: 'left' }}>
                <h2>{projects[4].title}</h2>
                <p className="blogContent" style={{ fontSize: '14px' }}>
                  {projects[4].details}
                </p>
                <Tops>
                  {projects[4].topics.map((item, index) => (
                    <span
                      key={index}
                      style={{
                        borderRadius: '0.5rem',
                        backgroundColor: '#288a8a',
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
                <Links>
                  <a href={projects[4].github}>
                    <IoLogoGithub
                      size={20}
                      style={{ margin: '5px', color: '#288a8a' }}
                    />
                  </a>
                  <a href={projects[4].link}>
                    <IoLinkOutline
                      size={20}
                      style={{ margin: '5px', color: '#288a8a' }}
                    />
                  </a>
                </Links>
              </ProjectInfo>
              <ProjectPreview>
                <Preview src={projects[4].preview} />{' '}
              </ProjectPreview>
            </ProjectContainer>
          </Fade>
          <ProjectLast>
            <Link to="/Projects">
              <Button
                style={{
                  backgroundColor: '#288a8a',
                  border: 'none',
                  borderRadius: '5px',
                  color: 'black',
                  cursor: 'grab',
                  fontWeight: 'bold',
                  justifySelf: 'center',
                  padding: '3px 10px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  width: 'auto',
                }}
              >
                See More
              </Button>
            </Link>
          </ProjectLast>
        </Portfolio2>
      </Page>
      {/* <Page>
        {theme.name === 'dark' ? (
          <ThinkerImage src={Thinker} alt="thinker" />
        ) : (
          <ThinkerImage src={ThinkerLight} alt="thinker light" />
        )}
      </Page> */}
      {/* </ScrollContainer> */}
    </React.Fragment>
  )
}

export default Home
