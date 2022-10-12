import React from "react";
import { AiOutlineBulb } from "react-icons/ai";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  border: 2px solid #0077cc;
  border-radius: 0.375rem;
  box-shadow: 1px 1px 10px ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 2px;
  padding: 8px;
  width: 20%;
  @media (max-width: 768px) {
    width: 95%;
  }
  :hover {
    box-shadow: none;
    transition: all 0.5s;
  }
`;

const Icon = styled.div`
  border: 3px solid #0077cc;
  border-radius: 50px;
  padding: 12px;
`;

const Interest = ({ data }) => {
  return (
    <Container>
      <Icon>
        <AiOutlineBulb size={80} color="#0077cc" />
      </Icon>
      <div>
        <p>{data.name}</p>
      </div>
    </Container>
  );
};

export default Interest;
