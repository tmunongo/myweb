import React, { useEffect, useCallback, useState } from 'react'
import styled from 'styled-components'
import ScrollIndicator from '../components/ScrollIndicator'
import Thinker from '../img/thinker-nobg-prism.jpg'
import { Link } from 'react-router-dom'
import { Fade } from 'react-reveal'


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
  padding: 30px;
  width: 65vw;
  @media (max-width: 700px){
    padding: 10px;
    width: 95vw;
  };
`

const Carousel = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 200px;
  list-style: none;
  margin: 100px auto;
  padding: 0;
  position: relative;
`

const Head = styled.h1`
margin: 0px 0px 10px 0px;
text-align: center;
  justify-content: center;
`

const Page = styled.div`
  align-items: center;
  color: white;
  display: grid;
  height: 100vh;
  min-height: 450px;

  @media (min-width: 700px) {
    padding: 0px calc(5%) 0px calc(5%);
    justify-content: space-around;
  }

  @media (max-width: 700px) {
    padding-left: 5px;
  }
`

const Para = styled.div`
  margin-block-start: 0;
  margin-block-end: 5;
  margin: 0px 5px 0px 5px;
`

const Preview = styled.img`
  @media (max-width: 700px) {
    display: none;
  }
`

const Portfolio1 = styled.div`
  height: 20vh; 
  padding-top: 20px;
  @media (max-width: 700px){
    width: 100vw;
  }
`

const Portfolio2 = styled.div`

`

const PortIntro = styled.p`
  color: white; 
  font-size: 18px; 
  width: 50vw;
  @media (max-width: 700px) {
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


//projects object
const projects = [
  {
    'id': 1,
    'title': 'Tickets!', 
    'details': 'Some details about Tickets Please', 
    'preview': 'https://github.com/edtha3rd/tickets-mob/raw/master/home_page.gif', 
    'github': 'https://github.com/edtha3rd/tickets-mob'
  },
  {
    'id': 2,
    'title': 'Java Notepad', 
    'details': 'A simple, lightweight text editor is a programmer\'s best friend. The basic functionality of the text editor must allow a user to open a new text file, save a new text file, update an existing file, or open a file from the device. This is my implementation, in Java, of a notepad that checks the above mentioned boxes.', 
    'preview': 'https://github.com/edtha3rd/notepad/raw/master/notepad.jpg', 
    'github': 'https://github.com/edtha3rd/notepad'
  },
  {
    'id': 3,
    'title': 'Snake Game', 
    'details': 'This is a web-based snake game in JavaScript. I chose this project to improve my understanding of how vanilla JavaScript refreshes rendered content and how to manually control this to implement something like a game engine.', 
    'preview': 'https://github.com/edtha3rd/snake-game/raw/master/gameplay.png', 
    'github': 'https://github.com/edtha3rd',
    'link': 'https://edtha3rd.github.io/snake-game/'
  }
]

const determineClasses = (indices, projectIndex) => {
  if (indices.currentIndex === projectIndex){
    return 'active'
  } else if (indices.nextIndex === projectIndex){
    return 'next'
  } else if (indices.previousIndex === projectIndex){
    return 'prev'
  }
  return 'inactive'
}


const Home = () => {
  const [indices, setIndices] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1
  })

  const handleCardChange = useCallback(() => {
    //start again after reaching end but carry prev value over
    if(indices.currentIndex >= projects.length - 1){
      setIndices({
        previousIndex: projects.length - 1,
        currentIndex: 0,
        nextIndex: 1
      })
    } else {
      setIndices((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex: prevState.currentIndex + 2 === projects.length ? 0 : prevState.currentIndex + 2
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
        <Page style={{ backgroundColor: 'black' }}>
          <Head className="headerName">Welcome, traveller</Head>
          <Fade bottom>

            <Para
              className="blogContent"
              style={{ color: 'white', textAlign: 'center' }}
            >
              My name is Tawanda.
              <br />I build websites and cross-platform mobile applications.
              <br />
              <br /> I also write fiction and non-fiction, exploring the
              intersection of technology and our existent ways of life.{' '}
            </Para>
            </Fade>
            <Link style={{ 
              backgroundColor: 'teal', 
              borderRadius: '5px', 
              color: 'white',
              fontWeight: 'bold',
              justifySelf: 'center', 
              padding: '3px 10px', 
              textAlign: 'center',
              textDecoration: 'none',
              width: 'auto'
              }} 
              to="/about"
            >
                MORE ABOUT ME
            </Link>
          <ScrollIndicator />
          {/* <More src={MoreArrow} alt="more" className="more-arrow" /> */}
        </Page>
        {/* second home page section */}
            <Page style={{ 
              backgroundColor: 'black',
              borderTop: '0.5px solid grey'
              }}>
              <Portfolio1 className='blogContent' style={{  }}>
                <Fade bottom>
                  <h2 style={{ textAlign: 'center' }}>My Portfolio</h2>
                </Fade>
                <Fade bottom>
                  <PortIntro style={{  }}>
                    My goals, whenever I select a new project to take on, are always to challenge myself and learn something new. For the last 4 years, I have worked on numerous projects in many programming languages, most of them as part of my CS coursework. 
                  </PortIntro>
                </Fade>
              </Portfolio1>
              <Portfolio2 style={{
                height: '80vh'
              }}>
                <Carousel className='projects-carousel'>
                  {projects.map((project, index) => (
                    <li
                    key={project.id}
                    className={`project ${determineClasses(indices, index)}`}
                    >
                      <Card>
                        <div style={{ flex: 0 }}>
                          <Preview src={project.preview} alt={project.title} style={{ height: '30vh' }}/>
                        </div>
                        <div style={{ flex: 1, marginLeft: '10px' }}>
                          <h2>{project.title}</h2>
                          <p style={{ marginBottom: '5px' ,textOverflow: 'ellipsis' }}>{project.details}</p>
                          <a href={project.github}>
                            <Button style={{ backgroundColor: 'purple', width: 'auto' }}>
                              Github
                            </Button>
                          </a>
                          {project.link 
                            ? <a href={project.link}>
                                <Button 
                                  style={{ 
                                    backgroundColor: 'teal', marginLeft: '5px'
                                  }}>
                                    Live Demo
                                </Button> 
                              </a>
                            : <div></div>}
                        </div>
                      </Card>
                    </li>
                  ))}
                </Carousel>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Button onClick={handleCardChange} style={{ 
                    backgroundColor: 'teal',
                    borderRadius: '5px',
                    color: 'white',
                    cursor: 'grab',
                    marginTop: '15vh',
                    padding: '10px',
                    textAlign: 'center',
                    }}
                  >
                    Next Item
                  </Button>
                  <Link to='/projects' style={{
                    alignSelf: 'center',
                    backgroundColor: 'darkgoldenrod',
                    borderRadius: '5px',
                    color: 'white',
                    fontWeight: 'bold',
                    marginTop: '1vh',
                    padding: '10px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    width: '40vw'
                  }}>All My Projects</Link>
                </div>
              </Portfolio2>
            </Page>
        <Page style={{ backgroundColor: 'black', borderTop: '0.5px solid grey' }} >
          <ThinkerImage src={Thinker} alt="thinker" />
        </Page>
          {/* </ScrollContainer> */}
        </React.Fragment>


    // <ScrollContainer>
    //   <Main>
    //     <ScrollPage page={0}>
    //       <Animator animation={batch(Fade(), Sticky(), ZoomOut())}>
    //       </Animator>
    //     </ScrollPage>
    //     <ScrollPage page={1}>
    //       <Animator animation={batch(Fade(), Sticky(), Move())}>
    //       </Animator>
    //       <ScrollIndicator />
    //     </ScrollPage>
    //     <ScrollPage page={2}>
    //       <Animator animation={batch(Fade(), Move(), Sticky())}>
    //       </Animator>
    //       <ScrollIndicator />
    //     </ScrollPage>
    //     <ScrollPage page={3}>
    //       <Animator animation={batch(Fade(), Move(), Sticky())}>
              // <Para
              //   className="blogContent"
              //   style={{ color: 'bisque', justifyContent: 'space-around' }}
              // >
              // <li>
              //   Programming Languages
              //     <ul>- Java</ul>
              //     <ul>- Python</ul>
              //     <ul>- HTML, CSS, JavaScript</ul>
              //   </li>
              //   <li>
              //   Frameworks
              //     <ul>- NodeJS</ul>
              //     <ul>- React and React Native</ul>
              //     <ul>- Django</ul>
              //   </li>
              // </Para>
    //         <Body>
    //           <Para
    //             className="blogContent"
    //             style={{ color: 'bisque', justifyContent: 'space-around' }}
    //           >
    //             <li>
    //               My fiction has been published in:
    //               <ul>- Ab Terra Flash Fiction</ul>
    //               <ul>- Literary Heish Magazine</ul>
    //               <ul>- The Rush Magazine</ul>
    //             </li>
    //           </Para>
    //         </Body>
    //       </Animator>
    //       <ScrollIndicator />
    //     </ScrollPage>
    //   </Main>
    // </ScrollContainer>
  )
}

export default Home
