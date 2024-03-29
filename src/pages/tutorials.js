import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loading from "../components/Loading";
import { GET_POSTS } from "../gql/query";

const Article = styled.article`
  border-bottom: 1px solid ${({ theme }) => (theme.dark ? "white" : "black")};
  padding: 0px 0px 10px 5px;
`;
const Banner = styled.div`
  color: ${({ theme }) => theme.colors.text};
  padding: 0px 0px 10px 0px;

  @media (min-width: 700px) {
    padding: 0px calc(10%) 0px calc(10%);
  }

  @media (max-width: 768px) {
    max-width: 95vw;
  }
`;

const Blurb = styled.p`
  margin: 5px 15px 0px 0px;
  padding: 0px 0px 0px 0px;
`;

const Error = styled.div`
  height: 60vh;
  text-align: center;
`;

const ErrorMessage = styled.span`
  font-size: 18px;
  font-weight: bolder;
`;

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

const Page = styled.div`
  border-radius: 0.3rem;
  margin: 4% 8%;
  min-height: 60vh;
  padding: 16px;
  @media (max-width: 768px) {
    margin: 5% 5%;
  }
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

function readTime(text) {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}

const Tutorials = () => {
  useEffect(() => {
    document.title = "Tawanda Munongo - Tutorials";
  });

  const { data, loading, error } = useQuery(GET_POSTS, {});

  //if data loading, display message
  // if (loading) return <p>Loading...</p>
  if (loading) return <Loading type={"cubes"} color={"#0077cc"} />;
  //if there is an error, display error message
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
  //if there is no data
  if (!data) return <p>Coming Soon</p>;

  const formatDate = (timestamp) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let date = new Date(timestamp).toLocaleDateString(undefined, options);
    return date;
  };
  const tutorials = data.PostFeed.posts
    .filter((post) => post.category === "Tutorial")
    .map((post) => post);
  return (
    <Page className="wifeBeater">
      <Head>
        <HeaderText className="heading">Tutorials</HeaderText>
        <Line style={{}}></Line>
      </Head>
      <div>
        {tutorials.map((post, index) => (
          <Link to={`/post/${post.slug}`} style={{ textDecoration: "none" }}>
            <Banner>
              <Article className="postList" key={index}>
                <Title>{post.title}</Title>
                <div>
                  <Blurb>{post.blurb}</Blurb> <br />
                  <TimeStamp>
                    {/* #48C0DE */}
                    {formatDate(post.createdAt)} | {readTime(post.content)} min
                  </TimeStamp>
                </div>
              </Article>
            </Banner>
          </Link>
        ))}
      </div>
    </Page>
  );
};

export default Tutorials;
