import React, { useEffect, useMemo } from 'react'
//import { useQuery } from '@apollo/client';
import styled from 'styled-components'
// import {
//   Animator,
//   batch,
//   Fade,
//   Move,
//   ScrollContainer,
//   ScrollPage,
//   Sticky,
//   ZoomOut,
// } from 'react-scroll-motion'
//import components
import ScrollIndicator from '../components/ScrollIndicator'
import Separator from '../components/Separator'
import Thinker from '../img/thinker-nobg-prism.jpg'
import MoreArrow from '../img/more-arrow.svg'

//styling
const Body = styled.div`
  align-items: center;
  color: white;
  display: flex;
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
const Details = styled.p`
  padding: 0 5%;
`

const Head = styled.h1`
margin: 0px 0px 10px 0px;
text-align: center;
  justify-content: center;
`

const LSection3 = styled.div`
  align-items: center;
  display: grid;
`


const More = styled.img`
  @media (min-width: 700px) {
    display: none;
  }
  @media (max-width: 700px) {
    height: 50px;
    margin: 10px 10px 10px 20px;
    width: 25px;
  }
`

const Para = styled.div`
  margin-block-start: 0;
  margin-block-end: 5;
  margin: 0px 5px 0px 5px;
`

const RSection3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const RSubSection = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(30%);
`

const Section3 = styled.div`
  align-items: center;
  color: white;
  display: grid;
  grid-template-columns: [first] 50% [second] 25% [third] 25% [end];
  grid-template-rows: [first] 30% [second] 30% [third] 30% [end];
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

const ScrollContainer = styled.div`
  height: 100vh;
  min-height: 450px;
  display: flex;
`

const ThinkerImage = styled.img`
  display: flex;
  height: calc(60%);
  width: calc(15%);

  @media (max-width: 700px) {
    display: none;
  }
`


const Home = () => {
  useEffect(() => {
    document.title = 'Tawanda Munongo - HomePage'
  })

  // useEffect(() => {
  //   const elements = document.querySelectorAll('.js-scroll')
  //   console.log(elements)
  // }, [])


  
  return (
    <React.Fragment>
      {/* <ScrollContainer> */}
        <Body style={{ flexDirection: 'column',   justifyItems: 'center' }}>
          <Head className="headerName">Welcome, traveller</Head>
          <ScrollIndicator />
          {/* <More src={MoreArrow} alt="more" className="more-arrow" /> */}
        </Body>
        <Body >
          <ThinkerImage src={Thinker} alt="thinker" />
            <Para
              className="blogContent"
              style={{ color: 'bisque', textAlign: 'right' }}
            >
              My name is Tawanda.
              <br />I build websites and cross-platform mobile applications.
              <br />
              <br /> I also write fiction and non-fiction, exploring the
              intersection of technology and our existent ways of life.{' '}
            </Para>
        </Body>
            <Section3>
              <LSection3 className='blogContent'>
                What I've Worked On <br />
                <p style={{ fontSize: 16, color: 'white'}}>
                  I always choose my projects with the aim of challenging myself.
                </p>
              </LSection3>
              <RSection3>
                <RSubSection style={{ }}>
                  Project 1
                  <img src='https://github.com/edtha3rd/notepad/blob/master/notepad.jpg' alt='notepad' style={{ height: 'calc(20%)', width: 'auto'}} />
                  <Details>
                    Here I will write some details about the project
                  </Details>
                </RSubSection>
                <Separator />
                <RSubSection style={{ }}>
                  Project 2
                  <Details>
                    Here I will write some details about the project
                  </Details>
                </RSubSection>
                <Separator />
                <RSubSection style={{ }}>
                  See More
                </RSubSection>
              </RSection3>
            </Section3>
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
