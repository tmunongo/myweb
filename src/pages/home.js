import React, { useEffect } from 'react'
//import { useQuery } from '@apollo/client';
import styled from 'styled-components'
import {
  Animator,
  batch,
  Fade,
  FadeIn,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  ZoomIn,
  ZoomOut,
} from 'react-scroll-motion'
//import components
import ScrollIndicator from '../components/ScrollIndicator'
import Thinker from '../img/thinker-nobg-prism.jpg'

//styling
const Head = styled.h1`
  margin: 0px 0px 10px 0px;
  text-align: center;
  justify-content: center;
`

const Image = styled.img`
  margin: 0px;
  width: calc(100%);
  height: auto;
  border-top: solid black;
  border-bottom: solid black;

  @media (min-width: 700px) {
    padding-left: 0px;
    width: calc(100%);
    height: 70vh;
  }
`

const Body = styled.div`
  color: white;
  background-color: black;
  display: flex;

  @media (min-width: 700px) {
    padding: 0px calc(25%) 0px calc(25%);
    justify-content: space-around;
    margintop: '15%';
  }

  @media (max-width: 700px) {
    padding-left: 5px;
  }
`

const Main = styled.div`
  background-color: black;
`

const Para = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  margin: 0px 5px 0px 5px;
`

const ThinkerImage = styled.img`
  height: calc(50%);
  width: calc(30%);
  display: flex;

  @media (max-width: 700px) {
    display: none;
  }
`

const Home = () => {
  useEffect(() => {
    document.title = 'Tawanda Munongo - HomePage'
  })

  return (
    <ScrollContainer>
      <Main>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), ZoomOut())}>
            <Head className="headerName">Welcome, traveller</Head>
          </Animator>
          <ScrollIndicator />
        </ScrollPage>
        {/* <ScrollPage page={1}>
          <Animator animation={batch(FadeIn(), MoveOut(0, -200))}>
            <CoverImage>
              <Image src={homeCover} alt="MyCover" />
            </CoverImage>
          </Animator>
        </ScrollPage> */}
        <ScrollPage page={1}>
          <Animator animation={batch(FadeIn(), MoveIn(0, 100))}>
            <Body>
              <ThinkerImage src={Thinker} alt="thinker" />
              <Para className="blogContent" style={{ color: 'bisque' }}>
                My name is Tawanda.
                <br />I build websites and cross-platform mobile applications. I
                write fiction and non-fiction, exploring the intersection of
                technology and our existent ways of life.{' '}
              </Para>
            </Body>
            <ScrollIndicator />
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={batch(FadeIn(), MoveIn(0, 100))}>
            <Body>
              <Para className="blogContent" style={{ color: 'bisque' }}>
                <li>
                  Programming Languages
                  <ul>- Java</ul>
                  <ul>- Python</ul>
                  <ul>- HTML, CSS, JavaScript</ul>
                </li>
                <li>
                  Frameworks
                  <ul>- NodeJS</ul>
                  <ul>- React and React Native</ul>
                  <ul>- Django</ul>
                </li>
              </Para>
            </Body>
          </Animator>
          <ScrollIndicator />
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={batch(FadeIn(), MoveIn(0, 100))}>
            <Body>
              <Para className="blogContent" style={{ color: 'bisque' }}>
                <li>
                  My fiction has been published in
                  <ul>- Ab Terra Flash Fiction</ul>
                  <ul>- Literary Heish Magazine</ul>
                  <ul>- The Rush Magazine</ul>
                </li>
              </Para>
            </Body>
            <ScrollIndicator />
          </Animator>
        </ScrollPage>
      </Main>
    </ScrollContainer>
  )
}

export default Home
