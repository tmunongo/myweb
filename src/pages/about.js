import React, { useEffect } from 'react'
import styled from 'styled-components'
import Avatar from '../img/profilepic.jpg'
import Github from '../img/github.png'
import Instagram from '../img/icons/instagram.png'
import Medium from '../img/icons/medium-blue.png'
import Twitter from '../img/icons/twitter.png'


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

const Item = styled.img`
  height: auto;
  width: 20%;
  @media (max-width: 700px) {
    display: none;
  }
`

const Page = styled.div`
  display: grid;
  background-color: black;
  grid-template-rows: [start] 10% [one] 20% [two] 10% [three] 30% [four] 30% [end];
  grid-template-columns: [start] 20% [first] 20% [second] 40% [third] 20% [end];
  padding-top: 10px;
`

const Link = styled.a`
`

const Me = styled.img`
  border-radius: 50%;
  grid-row: 1;
  grid-column: 1;
  grid-row: one / two;
  grid-column: second / second;
  height: auto;
  margin: 10px 0px 10px 0px;
  padding-bottom: 10px;
  width: 40%;
  @media (max-width: 700px) {
    grid-row-start: start / middle;
    grid-column: first;
    height: 200px;
    padding-top: 15px;
    width: auto;
    align-self: center;
  }
`

const Text = styled.span``

const About = () => {
  useEffect(() => {
    document.title = 'Tawanda - About'
  })

  return (
        <Page>
          <Link href="https://github.com/edtha3rd" 
          style={{   
            display: 'grid', 
            gridRow: 'start / one', 
            gridColumn: 'second / second', 
            paddingLeft: '12%', 
            width: '100%'
            }}>
            <Item src={Github} alt="Github"  />
          </Link>
          <Link href="https://twitter.com/edtha3rd" style={{ 
              alignSelf: 'center',
              display: 'grid', 
              gridRow: 'one / two',
              gridColumn: 'second / second',
              justifyItems: 'right', 
              width: 'auto' 
            }} >
            <Item src={Twitter} alt="Twitter"  />
          </Link>
          <Me src={Avatar} alt="my-avatar"/>
           <Link href="https://instagram.com/ej_ta1da" 
           style={{ 
             alignSelf: 'center',
             display: 'grid', 
             gridRow: 'one / two', 
             gridColumn: 'first / first', 
             justifyItems: 'left', 
             width: 'auto' }}>
            <Item src={Instagram} alt="Instagram" />
          </Link>
          <Link href="https://thoughtrealm.medium.com"
          style={{
            borderRadius: 30,
            display: 'grid', 
            gridRow: 'two / three', 
            gridColumn: 'second / second',
            marginBottom: 15,
            paddingLeft: '12%', 
            width: 'auto'
          }}>
            <Item src={Medium} alt="Medium" />
          </Link>
      <Body>
        <Text style={{ fontSize: 18}}>
          Hello! I'm <strong>Tawanda Munongo </strong>. I'm passionate about technology. 
          I was drawn to front end design because I know from experience the difference an easy and 
          intuitive user interface can make. The most widely used digital services are popular 
          because using them is an enjoyable experience. My mission is to make the benefits of 
          cutting edge technologies accessible by working on products that are as useful as 
          they are easy on the eyes. <br></br>
          <br></br>
          When I'm not coding, I write. My writings aim to be equal parts informative and 
          contemplative. I write to keep up with development in the world of technology, 
          to analyse and understand tech trends, and to help those who are curious about 
          the future of tech understand how these changes will affect our lives. <br />
          <br /> My fiction has been published online in a number of magazines
          including{' '}
          <a href="http://bmpvoices.com/issue-3-robots/">
            Ab Terra Flash Fiction{' '}
          </a>{' '}
          and <a href="https://www.rushmagazine.org/">The Rush Magazine</a>. You
          can find my earlier writings on my{' '}
          <a href="https://thoughtrealm.medium.com">Medium</a> page.
          <br></br><br></br>
          For any web design work, don't hesitate to get in touch with me!
        </Text>
      </Body>
    </Page>
  )
}

export default About
