import React from 'react'
import styled from 'styled-components'
import scrollArrow from '../img/scroll-arrow.svg'

const ArrowContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`

const ScrollArrow = styled.img`
  display: flex;
  flex: 0;
  justify-content: space-between;
  height: 80px;
  width: 60px;
`

const ScrollIndicator = () => {
  return (
    <ArrowContainer>
      <ScrollArrow
        className="scroll-arrow"
        src={scrollArrow}
        alt="scroll-arrow"
      />
      <ScrollArrow
        className="scroll-arrow"
        src={scrollArrow}
        alt="scroll-arrow"
      />
    </ArrowContainer>
  )
}

export default ScrollIndicator
