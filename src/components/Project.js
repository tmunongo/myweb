import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: whitesmoke;
  border-radius: 0.375rem;
  display: flex;
  flex-direction: column;
  height: 450px;
  margin: 4px;
  overflow: scroll;
  padding: 16px;
  width: 300px;
  @media (max-width: 768px) {
    height: 340px;
    margin-y: 8px;
  }
  :hover {
    box-shadow: 6px 6px 2px 1px black;
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

const MainText = styled.span`
  font-size: 14px;
  color: black;
`

const TitleText = styled.span`
  color: black;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`

const Tops = styled.div`
  flex: row;
`

const Project = ({ title, topics, details, preview, github, link }) => {
  return (
    <Container>
      <TitleText>{title}</TitleText>
      <Image src={preview} alt="preview" />
      <div style={{ textAlign: 'center', flex: 'row', fontSize: '14px' }}>
        <Link>
          <a href={github}>Github</a>
        </Link>
        {link ? (
          <Link>
            <a href={link}>Link</a>
          </Link>
        ) : (
          <span></span>
        )}
      </div>
      <Tops>
        {topics.map((item, index) => (
          <span
            key={index}
            style={{
              borderRadius: '0.5rem',
              backgroundColor: 'cyan',
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
      <MainText>{details}</MainText>
    </Container>
  )
}

export default Project
