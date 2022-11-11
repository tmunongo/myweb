import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

//local imports
import Loading from "../components/Loading";
import Post from "../components/Post";
import { GET_POST_BY_SLUG } from "../gql/query";

const Error = styled.div`
  height: 60vh;
  text-align: center;
`;

const ErrorMessage = styled.span`
  font-size: 18px;
  font-weight: bolder;
`;

const PostPage = () => {
  let { slug } = useParams();

  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
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
    <div>
      <head>
        <meta name="og:title" content={data.postBySlug.title} />
        <meta name="description" content={data.postBySlug.blurb} />
        <meta name="og:image" content={data.postBySlug.coverURL} />
        {/* <meta name="twitter:card" content={data.postBySlug.coverURL} />
        <meta name="twitter:site" content="@edtha3rd" />
        <meta name="twitter:title" content={data.postBySlug.title} />
        <meta name="twitter:description" content={data.postBySlug.blurb} />
        <meta name="twitter:image" content={data.postBySlug.coverURL} /> */}
      </head>
      <Post post={data.postBySlug} />
    </div>
  );
};

export default PostPage;
