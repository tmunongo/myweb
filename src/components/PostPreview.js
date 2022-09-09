import React from "react";
import styled from "styled-components";
import { formatDate } from "../utils/formatdate";
import { readTime } from "../utils/readtime";

const Article = styled.article`
  border-bottom: 1px solid ${({ theme }) => (theme.dark ? "white" : "black")};
  padding: 10px 0px 10px 10px;
`;

const Blurb = styled.p`
  margin: 5px 15px 0px 0px;
  padding: 0px 0px 0px 0px;
`;

const TimeStamp = styled.h3`
  margin: 0px 15px 2px 0px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  width: calc(100%);
  @media (max-width: 700px) {
    width: calc(100%);
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  margin-bottom: 5px;
  text-transform: capitalize;
  @media (max-width: 700px) {
    margin: 0px 0px 5px 0px;
  }
`;

const PostPreview = ({ title, createdAt, blurb, content }) => {
  return (
    <>
      <Article className="postList">
        <Title>{title}</Title>
        <div>
          <Blurb>{blurb}</Blurb> <br />
          <TimeStamp>
            {/* #48C0DE */}
            {formatDate(createdAt)} | {readTime(content)} min
          </TimeStamp>
        </div>
      </Article>
    </>
  );
};

export default PostPreview;
