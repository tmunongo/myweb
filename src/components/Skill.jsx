import React from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  height: max-content;
  justify-content: space-between;
  margin: 4px;
  padding: 4px;
  width: 47%;
  @media (max-width 768px) {
    margin: 0px;
  }
  @media (max-width: 300px) {
    width: 95%;
  }
`;

const Name = styled.div``;

const Rating = styled.div``;

const Skill = ({ data }) => {
  const displaySkillLevel = () => {
    const skillLevel = [];
    for (let index = 0; index < data.level; index++) {
      skillLevel[index] = <FaStar color="#0077cc" />;
    }
    return skillLevel;
  };

  return (
    <Container>
      <Name>
        <p>{data.name}</p>
      </Name>
      <Rating>
        <span>
          {displaySkillLevel().map((item, index) => {
            return item;
          })}
        </span>
      </Rating>
    </Container>
  );
};

export default Skill;
