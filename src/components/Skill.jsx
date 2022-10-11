import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  height: max-content;
  justify-content: space-between;
  width: 50%;
`;

const Name = styled.div``;

const Rating = styled.div``;

const Skill = ({ data }) => {
  const displaySkillLevel = (rating) => {
    for (let index = 0; index < rating; index++) {
      return <FaStarHalfAlt />;
    }
  };

  return (
    <Container>
      <Name>
        <p>{data.Name}</p>
      </Name>
      <Rating>
        <span>{displaySkillLevel(data.Rating)}</span>
      </Rating>
    </Container>
  );
};

export default Skill;
