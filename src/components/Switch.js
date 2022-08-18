import React from 'react'
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs'
import styled from 'styled-components'

const Container = styled.div`
  color: ${({ theme }) => theme.colors.headerText};
  cursor: pointer;
  left: 540px;
  position: fixed;
  transition: all 500ms;
  top: 32px;
  z-index: 1000;
  @media (max-width: 1160px) {
    left: 330px;
  }
  @media (max-width: 960px) {
    left: 80px;
  }
`

const Switch = ({ theme, handleThemeChange }) => {
  return (
    <Container>
      {theme.name === 'dark' ? (
        <BsFillMoonFill size={20} onClick={() => handleThemeChange()} />
      ) : (
        <BsSunFill size={20} onClick={() => handleThemeChange()} />
      )}
    </Container>
  )
}

export default Switch
