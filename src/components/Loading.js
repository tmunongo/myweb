import React from 'react'
import ReactLoading from 'react-loading'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  height: window.innerHeight;
  justify-content: center;
  width: window.innerWidth;
  @media (min-width: 700px) {
  }
`

const Loading = ({ type, color }) => (
  <Container>
    <ReactLoading type={type} color={color} height={175} width={100} />
  </Container>
)

export default Loading
