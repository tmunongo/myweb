import React, { useEffect } from 'react'
//import { useQuery } from '@apollo/client';
import styled from 'styled-components'
import {
  Animator,
  batch,
  Fade,
  Move,
  ScrollContainer,
  ScrollPage,
  Sticky,
  ZoomOut,
} from 'react-scroll-motion'
//import components
import ScrollIndicator from '../components/ScrollIndicator'
import Thinker from '../img/thinker-nobg-prism.jpg'
import MoreArrow from '../img/more-arrow.svg'

//styling
const Head = styled.h1`
  margin: 0px 0px 10px 0px;
  text-align: center;
  justify-content: center;
`

const Body = styled.div`
  color: white;
  display: flex;

  @media (min-width: 700px) {
    padding: 0px calc(5%) 0px calc(5%);
    justify-content: space-around;
    margin-top: 15%;
  }

  @media (max-width: 700px) {
    padding-left: 5px;
  }
`

const Main = styled.div``

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

const Para = styled.p`
  margin-block-start: 0;
  margin-block-end: 5;
  margin: 0px 5px 0px 5px;
`

const ThinkerImage = styled.img`
  display: flex;
  height: calc(50%);
  width: calc(30%);

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
          <More src={MoreArrow} alt="more" className="more-arrow" />
          <Animator animation={batch(Fade(), Sticky(), ZoomOut())}>
            <Head className="headerName">Welcome, traveller</Head>
            <ScrollIndicator />
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={batch(Fade(), Sticky(), Move())}>
            <Body>
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
          </Animator>
          <ScrollIndicator />
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            <Body>
              <Para
                className="blogContent"
                style={{ color: 'bisque', justifyContent: 'space-around' }}
              >
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
          <Animator animation={batch(Fade(), Move(), Sticky())}>
            <Body>
              <Para
                className="blogContent"
                style={{ color: 'bisque', justifyContent: 'space-around' }}
              >
                <li>
                  My fiction has been published in:
                  <ul>- Ab Terra Flash Fiction</ul>
                  <ul>- Literary Heish Magazine</ul>
                  <ul>- The Rush Magazine</ul>
                </li>
              </Para>
            </Body>
          </Animator>
          <ScrollIndicator />
        </ScrollPage>
      </Main>
    </ScrollContainer>
  )
}

export default Home
