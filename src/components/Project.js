import React from 'react'
import { FaGithubAlt, FaLink } from 'react-icons/fa'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 1rem;
  border: 3px solid #288a8a;
  // box-shadow: 4px 4px 2px 1px black, -4px -4px 2px 1px black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
  margin: 10px;
  padding: 12px 12px;
  width: 300px;
  @media (max-width: 768px) {
    height: 340px;
    margin: 15px 0px;
  }
  :hover {
    transition: all 0.5s;
    translate: 0px -10px;
  }
`

const Image = styled.img`
  align-self: center;
  border-radius: 0.375rem;
  height: 160px;
  margin-bottom: 5px;
  width: 200px;
`

const Link = styled.span`
  margin-right: 5px;
`

const LinkContainer = styled.div`
  bottom: 0px;
  display: flex;
  flex-direction: row;
  font-size: 14px;
  justify-content: space-between;
  text-align: center;
  width: 100%;
`

const MainText = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`

const TitleText = styled.span`
  color: #288a8a;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: center;
  text-decoration: underline;
`

const Tops = styled.div`
  flex-direction: row;
  justify-content: center;
`

const Project = ({ title, topics, details, preview, github, link }) => {
  return (
    <Container>
      <TitleText>{title}</TitleText>
      {/* <Image src={preview} alt="preview" /> */}
      <MainText className="blogContent">{details}</MainText>
      <Tops>
        {topics.map((item, index) => (
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
      <LinkContainer>
        <Link>
          <a href={github}>
            <FaGithubAlt size={35} color={'#288a8a'} />
          </a>
        </Link>
        {link ? (
          <Link>
            <a href={link}>
              <FaLink size={35} color={'#288a8a'} />
            </a>
          </Link>
        ) : (
          <span></span>
        )}
      </LinkContainer>
    </Container>
  )
}

export default Project
