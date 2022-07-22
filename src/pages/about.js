import emailjs from '@emailjs/browser'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Github from '../img/github.png'
import Instagram from '../img/icons/instagram.png'
import Medium from '../img/icons/medium-blue.png'
import Twitter from '../img/icons/twitter.png'
import Avatar from '../img/profilepic.jpg'

const Body = styled.div`
  align-items: flex-end;
  color: #b4b4b4;
  grid-row: 2;
  grid-column: 2;
  grid-row: one / one;
  grid-column: first / sixth;
  padding: 0px 10px 0px 10px;
  @media (max-width: 700px) {
    grid-row: one / one;
    grid-column: start / end;
    padding-top: 15px;
  }
`

const Button = styled.a`
  border: 2px solid #0077cc;
  border-radius: 0.3rem;
  color: #0077cc;
  cursor: grab;
  font-weight: bold;
  margin: 10px 15px 10px 0px;
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
`

const ContactForm = styled.div`
  grid-row: two / two;
  grid-column: first / sixth;
  margin: 0 auto;
  padding: 0px 0px 0px 10px;
  width: 100%;
`

const FormLabel = styled.label`
  font-size: 18px;
  grid-column: second / second;
  height: auto;
`

const Input = styled.input`
  grid-column: third / third;
`

const Item = styled.img`
  border-radius: 20%;
  height: auto;
  outline: solid #0077cc 3px;
  outline-offset: 5px;
  width: 50%;
  @media (max-width: 700px) {
    display: none;
  }
`
const Link = styled.a`
  grid-row: start / one;
`

const Me = styled.img`
  align-self: center;
  border-radius: 50%;
  grid-row: start / one;
  grid-column: third / third;
  height: auto;
  justify-self: center;
  margin: 10px 0px 10px 0px;
  padding-bottom: 10px;
  width: 40%;
  @media (max-width: 700px) {
    grid-row-start: start / start;
    grid-column: first / sixth;
    height: 200px;
    outline: groove #0077cc 2px;
    outline-offset: 5px;
    padding-top: 15px;
    width: auto;
    align-self: center;
  }
`
const Page = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary}; //#252522
  border-radius: 0.3rem;
  display: grid;
  grid-template-rows: [start] auto [one] auto [two] auto [end];
  grid-template-columns: [start] 20% [first] 8% [second] 8% [third] 28% [fourth] 8% [fifth] 8% [sixth] 20% [end];
  margin: 4% 8%;
  min-height: 100vh;
  padding-top: 10px;
  @media (max-width: 768px) {
    margin: 5% 5%;
  }
`

const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};
  height: 100%;
`

const About = () => {
  useEffect(() => {
    document.title = 'Tawanda - About'
  })

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.EMAIL_JS_SERVICE_ID,
        process.env.EMAIL_JS_TEMPLATE_ID,
        form.current,
        process.env.EMAIL_JS_PRIVATE_KEY
      )
      .then(
        () => {
          return (
            <div>
              <p>Email successful</p>
            </div>
          )
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <Page>
      <Link
        href="https://github.com/edtha3rd"
        style={{
          alignSelf: 'center',
          display: 'grid',
          justifyItems: 'end',
          gridColumn: 'first / first',
        }}
      >
        <Item src={Github} style={{ borderRadius: '50%' }} alt="Github" />
      </Link>
      <Link
        href="https://twitter.com/edtha3rd"
        style={{
          alignSelf: 'center',
          display: 'grid',
          gridColumn: 'second / second',
          justifyItems: 'right',
        }}
      >
        <Item src={Twitter} alt="Twitter" />
      </Link>
      <Me src={Avatar} alt="my-avatar" />
      <Link
        href="https://instagram.com/ej_ta1da"
        style={{
          alignSelf: 'center',
          display: 'grid',
          gridColumn: 'fourth / fourth',
          justifyItems: 'left',
        }}
      >
        <Item src={Instagram} alt="Instagram" />
      </Link>
      <Link
        href="https://thoughtrealm.medium.com"
        style={{
          alignSelf: 'center',
          borderRadius: 30,
          display: 'grid',
          gridColumn: 'fifth / fifth',
        }}
      >
        <Item src={Medium} alt="Medium" />
      </Link>
      <Body>
        <Text style={{ fontSize: 18 }}>
          Hello! I'm <strong>Tawanda Munongo </strong>. I'm passionate about
          technology. I was drawn to front end design because I know from
          experience the difference an easy and intuitive user interface can
          make. The most widely used digital services are popular because using
          them is an enjoyable experience. My mission is to make the benefits of
          cutting edge technologies accessible by working on products that are
          as useful as they are easy on the eyes. <br></br>
          <br></br>
          When I'm not coding, I write. I try to be equal parts informative and
          contemplative. I write to keep up with development in the world of
          technology, to analyse and understand tech trends, and to help the
          billions of tech-curious people understand where our lives are headed.{' '}
          <br />
          <br /> My fiction has been published online in a number of magazines
          including{' '}
          <a href="http://bmpvoices.com/issue-3-robots/">
            Ab Terra Flash Fiction{' '}
          </a>{' '}
          and <a href="https://www.rushmagazine.org/">The Rush Magazine</a>. You
          can find my earlier writings on my{' '}
          <a href="https://thoughtrealm.medium.com">Medium</a> page.
          <br></br>
          <br></br>
          For any web design work, don't hesitate to get in touch with me!
        </Text>
        <div style={{ margin: '25px 0px' }}>
          <Button href="https://www.dropbox.com/s/cerj0ua9xfrclun/Tawanda%20Munongo%20Resume.pdf?dl=0">
            My Resume
          </Button>
          <Button href="https://www.dropbox.com/s/er33ewam4dm3lfv/Tawanda%20Munongo%20Lebenslauf.pdf?dl=0">
            Mein Lebenslauf
          </Button>
        </div>
      </Body>

      {/* <ContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <FormLabel>Name</FormLabel>
          <Input type="text" name="user_name" /> <br />
          <FormLabel>Email</FormLabel>
          <Input type="email" name="user_email" /> <br />
          <FormLabel>Message</FormLabel>
          <textarea name="message" /> <br />
          <input type="submit" value="Send" />
        </form>
      </ContactForm> */}
    </Page>
  )
}

export default About
