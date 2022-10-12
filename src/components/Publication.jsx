import React from "react";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  border: 2px solid #0077cc;
  border-radius: 0.375rem;
  box-shadow: 1px 1px 8px ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  margin: 8px;
  padding: 8px;
  width: 20%;
  @media (max-width 768px) {
    margin: 0px;
    width: 95%;
  }
  :hover {
    box-shadow: none;
    transition: all 0.5s;
  }
`;

const Publication = ({ data }) => {
  return (
    <Container>
      <div>
        <p>{data.name}</p>
      </div>
      <div>
        <p>{data.pub}</p>
      </div>
      <div>
        <a href={data.link}>Check it out</a>
      </div>
    </Container>
  );
};

export default Publication;
