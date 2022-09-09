import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import PostPreview from "../components/PostPreview";
import TitleHead from "../components/Title";
import { GET_POSTS_BY_TAG } from "../gql/query";

const Error = styled.div`
  height: 60vh;
  text-align: center;
`;

const ErrorMessage = styled.span`
  font-size: 18px;
  font-weight: bolder;
`;

const Page = styled.div`
  border-radius: 0.3rem;
  margin: 4% 8%;
  min-height: 60vh;
  padding: 16px;
  @media (max-width: 768px) {
    margin: 5% 5%;
  }
`;

const Category = () => {
  let { tag } = useParams();

  const { loading, error, data } = useQuery(GET_POSTS_BY_TAG, {
    variables: { tag },
  });

  if (loading)
    return (
      <Error
        className="wifeBeater"
        style={{ margin: "4% 8%", borderRadius: "0.375rem", padding: "12px" }}
      >
        <Loading type={"cubes"} color={"#0077cc"} />
      </Error>
    );
  if (error)
    return (
      <Error
        className="wifeBeater"
        style={{ margin: "4% 8%", borderRadius: "0.375rem", padding: "12px" }}
      >
        <ErrorMessage>Oops! {error.message}</ErrorMessage>
        <Link to="/">
          <p>Return Home</p>
        </Link>
      </Error>
    );

  return (
    <Page className="wifeBeater">
      <TitleHead>{tag}</TitleHead>
      {data.postsByTag.map((post, index) => {
        return (
          <PostPreview
            key={index}
            title={post.title}
            createdAt={post.createdAt}
            blurb={post.blurb}
            content={post.content}
          />
        );
      })}
    </Page>
  );
};

export default Category;
