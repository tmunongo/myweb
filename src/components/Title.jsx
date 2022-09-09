import React from "react";
import styled from "styled-components";

const Head = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 16px;
    // display: none;
  }
`;

const HeaderText = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 26px;
  margin: 0px 0px 0px 20px;
  @media (max-width: 768px) {
    font-size: 18px;
    margin: 0px 10px 0px 0px;
    // display: none;
  }
`;

const Line = styled.div`
  background: #288a8a;
  height: 1px;
  margin-left: 20px;
  margin-bottom: 0.5rem;
  width: 480px;
  @media (max-width: 768px) {
    width: 140px;
  }
`;

const TitleHead = ({ children }) => {
  return (
    <Head>
      <HeaderText className="heading">{children}</HeaderText>
      <Line></Line>
    </Head>
  );
};

export default TitleHead;
