import emailjs from "@emailjs/browser";
import React, { useEffect, useRef } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMediumCircle,
  AiFillTool,
  AiFillTwitterCircle,
} from "react-icons/ai";
import styled from "styled-components";
import Skill from "../components/Skill";
import { skillData } from "../data/skills";
import Avatar from "../img/profilepic.jpg";

const Body = styled.div`
  align-items: center;
  color: #b4b4b4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 10px 0px 10px;
  @media (max-width: 700px) {
    padding-top: 15px;
  }
`;

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
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px;
  }
`;

const ContactForm = styled.div`
  grid-row: two / two;
  grid-column: first / sixth;
  margin: 0 auto;
  padding: 0px 0px 0px 10px;
  width: 100%;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  width: 85%;
`;

const FormLabel = styled.label`
  font-size: 18px;
  grid-column: second / second;
  height: auto;
`;

const Head = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
`;

const Icon = styled.div`
  height: 100%;
  width: 15%;
`;

const Input = styled.input`
  grid-column: third / third;
`;

const Item = styled.img`
  border-radius: 20%;
  height: auto;
  outline: solid #0077cc 3px;
  outline-offset: 5px;
  width: 50%;
  @media (max-width: 700px) {
    display: none;
  }
`;

const Line = styled.div`
  background-color: black;
  height: 3px;
  margin: 8px 0px;
  width: 80%;
`;

const Link = styled.a`
  grid-row: start / one;
`;

const Me = styled.img`
  align-self: center;
  border-radius: 50%;
  height: auto;
  justify-self: center;
  margin: 10px 0px 10px 0px;
  padding-bottom: 10px;
  width: 15%;
  @media (max-width: 980px) {
    height: 200px;
    outline: groove #0077cc 2px;
    outline-offset: 5px;
    padding-top: 15px;
    width: auto;
    align-self: center;
  }
`;
const Page = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary}; //#252522
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 4% 8%;
  min-height: 100vh;
  padding-top: 10px;
  @media (max-width: 768px) {
    margin: 5% 5%;
  }
`;

const Profile = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Section = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Skills = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

const Text = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  height: 100%;
  margin: 5px 15%;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 14px;
    margin: 5px 4px;
  }
`;

const About = () => {
  useEffect(() => {
    document.title = "Tawanda - About";
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Page>
      <Head>
        <Link
          href="https://github.com/edtha3rd"
          style={{
            alignSelf: "center",
            display: "grid",
            justifyItems: "end",
            gridColumn: "first / first",
          }}
        >
          <AiFillGithub size={60} className="aboutLink" />
        </Link>
        <Link
          href="https://twitter.com/edtha3rd"
          style={{
            alignSelf: "center",
            display: "grid",
            gridColumn: "second / second",
            justifyItems: "right",
          }}
        >
          <AiFillTwitterCircle size={80} className="aboutLink" />
        </Link>
        <Me src={Avatar} alt="my-avatar" />
        <Link
          href="https://instagram.com/ej_ta1da"
          style={{
            alignSelf: "center",
            display: "grid",
            gridColumn: "fourth / fourth",
            justifyItems: "left",
          }}
        >
          <AiFillInstagram size={80} className="aboutLink" />
        </Link>
        <Link
          href="https://thoughtrealm.medium.com"
          style={{
            alignSelf: "center",
            borderRadius: 30,
            display: "grid",
            gridColumn: "fifth / fifth",
          }}
        >
          <AiFillMediumCircle size={60} className="aboutLink" />
        </Link>
      </Head>
      <Line />
      <Section>
        <Profile>
          <Text>
            I’m a software engineer who loves building full-stack applications
            that harness the power of cutting-edge web and cloud technologies.
            My latest web app allows culinary enthusiasts to catalogue and
            manage their recipes through a fast and responsive web platform that
            uses Google OAuth 2.0 for user authentication. I have worked
            primarily with object-oriented programming languages, harnessing
            their power to real world objects. I especially enjoy exploring the
            different use cases from different web technologies, whether its
            Static-Site Generation or Server-Side Render to create optimal
            digital experiences that are a joy to use and resource-light. I also
            run a blog where I share my experiences with technology, exploring
            thoughts and ideas on how we can leverage new technologies in our
            personal and professional lives.
          </Text>
        </Profile>
      </Section>
      <Line />
      <Section>
        <Skills>
          <Icon>
            <AiFillTool size={30} />
          </Icon>
          <Content>
            {skillData.map((item, index) => {
              return <Skill key={index} data={item} />;
            })}
          </Content>
        </Skills>
      </Section>

      {/* <Body>
          
      </Body> */}

      {/* <Text style={{ fontSize: 18 }}>
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
          billions of tech-curious people understand where our lives are headed.{" "}
          <br />
          <br /> My fiction has been published online in a number of magazines
          including{" "}
          <a href="http://bmpvoices.com/issue-3-robots/">
            Ab Terra Flash Fiction{" "}
          </a>{" "}
          and <a href="https://www.rushmagazine.org/">The Rush Magazine</a>. You
          can find my earlier writings on my{" "}
          <a href="https://thoughtrealm.medium.com">Medium</a> page.
          <br></br>
          <br></br>
          For any web design work, don't hesitate to get in touch with me!
        </Text>
        <div style={{ margin: "25px 0px" }}>
          <Button href="https://www.dropbox.com/s/x5b45bycvni412c/Tawanda_Eddie%20Junior%20Munongo_Resume.pdf?dl=0">
            Resume
          </Button>
          <Button href="https://www.dropbox.com/s/399u3g47cm59g1l/Tawanda%20Eddie%20Junior%20Munongo%20CV%20Europass.pdf?dl=0">
            Europass CV
          </Button>
        </div> */}

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
  );
};

export default About;
