import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const SwitchLabel = styled.label`
  @media (max-width: 768px) {
  }
`

const Switch = ({ handleThemeChange }) => {
  return (
    <Container>
      <input
        className="switch"
        id={`new-switch`}
        type="checkbox"
        onClick={() => handleThemeChange()}
      />
      <SwitchLabel className="switch-label" htmlFor={`new-switch`}>
        <span
          style={{ border: `1px solid ${({ theme }) => theme.color.header}` }}
          className={`switch-button`}
        />
      </SwitchLabel>
    </Container>
  )
}

export default Switch
