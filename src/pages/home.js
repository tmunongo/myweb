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
import homeCover from '../img/backstreet-2.jpg'

//styling
const CoverImage = styled.div`
  width: calc(100%);
  height: auto;
  background-color: black;
`

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

  @media (min-width: 700px) {
    padding: 0px calc(100% - 75%) 0px calc(100% - 75%);
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
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={batch(FadeIn(), MoveOut(0, -200))}>
            <CoverImage>
              <Image src={homeCover} alt="MyCover" />
            </CoverImage>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={batch(FadeIn(), MoveIn(0, 200))}>
            <Body>
              <Para className="blogContent">
                This is my thin slice of the internet pie. I hope you like what
                you see. <br />
                <br />
                I haven’t decided what I love more, reading or telling stories.
                I like to tell stories about the world, to connect dots, to
                understand. There’s a piece of me in everything that you’ll read
                here. It’s okay to not agree with me — half the time I don’t
                even agree with myself. I do, however, try to be honest. My
                points of view are constantly changing, evolving, as am I. My
                story is still being written. Feel free to tag along. <br />
                <br />I have sought (and am still seeking) wisdom from
                everywhere, trying to understand my place in this world. I’ll
                write on everything from philosophy, modern technology, science,
                religion, and spirituality. I’ll (hopefully) share my fiction
                more frequently, too.
              </Para>
            </Body>
          </Animator>
        </ScrollPage>
      </Main>
    </ScrollContainer>
  )
}

export default Home
