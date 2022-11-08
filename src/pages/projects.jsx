import React, { useEffect } from "react";
import styled from "styled-components";
import Project from "../components/Project";
import TitleHead from "../components/Title";

//projects object
import { projects } from "../data/projects";

//styles
const Container = styled.div`
  width: fit-content;
`;

const Main = styled.h1`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-height: 100vh;
  @media (max-width: 1560px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media (max-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
const Page = styled.div`
  border-radius: 0.3rem;
  margin: 4% 8%;
  padding: 16px;
  @media (max-width: 768px) {
    margin: 5% 5%;
  }
`;

const Projects = () => {
  useEffect(() => {
    document.title = "Tawanda Munongo - Projects";
  });
  return (
    <Page className="wifeBeater">
      <TitleHead>Some of my Work</TitleHead>
      <Main>
        {projects.map((item, index) => (
          <Container key={index}>
            <Project
              title={item.title}
              topics={item.topics}
              details={item.details}
              preview={item.preview}
              github={item.github}
              link={item.link}
            />
          </Container>
        ))}
      </Main>
    </Page>
  );
};

export default Projects;
