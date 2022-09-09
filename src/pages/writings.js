import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//import components
import Loading from "../components/Loading";
import PostPreview from "../components/PostPreview";
import TitleHead from "../components/Title";

//import gql
import { GET_POSTS } from "../gql/query";

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

const Body = styled.div`
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  padding: 16px;
  @media (min-width: 768px) {
    columns: 2;
    display: flex;
    margin: 4% 8%;
    max-width: calc(90%);
    padding: 50px 5px 25px 5px;
  }
  @media (max-width: 768px) {
    margin: 5% 5%;
  }
  // background: #1f1f1f;
`;

const Error = styled.div`
  height: 60vh;
  text-align: center;
`;

const ErrorMessage = styled.span`
  font-size: 18px;
  font-weight: bolder;
`;

const Left = styled.div``;

const TagBody = styled.div`
  border: 2px solid #288a8a;
  border-radius: 0.375rem;
  margin: 10px 80px 10px 80px;
  padding: 5px;
  width: 60vw;
  @media (max-width: 768px) {
    margin: 10px 20px 10px 0px;
    width: 80vw;
  }
`;

const Tags = styled.button`
  border-radius: 50px;
  border-style: none;
  font-size: 12px;
  font-weight: bold;
  margin: 5px;
  padding: 5px;
`;

const Writings = () => {
  useEffect(() => {
    document.title = "Tawanda Munongo - Blog";
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
  if (!data) return <p>Not found</p>;

  //create an array with only the unique categories from the posts object
  const uniqueTags = () => {
    const flag = {};
    let array = [];
    data.PostFeed.posts.forEach((elem) => {
      if (!flag[elem.category]) {
        flag[elem.category] = true;
        array.push(elem);
      }
    });
    return array;
  };

  //if fetch successful, display in UI
  return (
    <Body className="wifeBeater">
      <Left>
        <TitleHead>My Writings</TitleHead>
        {/* display tags to filter posts */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TagBody>
            Tags:
            {uniqueTags().map((post, index) => {
              return (
                <Tags
                  key={index}
                  style={{
                    backgroundColor: `rgb(${Math.random() * 255}, ${
                      Math.random() * 255
                    }, 0)`,
                  }}
                >
                  {post.category}
                </Tags>
              );
            })}
          </TagBody>
        </div>
        {data.PostFeed.posts.map((post, index) => (
          <Link to={`/post/${post.slug}`} style={{ textDecoration: "none" }}>
            <Banner key={index}>
              <PostPreview
                title={post.title}
                blurb={post.blurb}
                content={post.content}
                createdAt={post.createdAt}
              />
            </Banner>
          </Link>
        ))}
      </Left>

      <Left>
        {uniqueTags().map((tag, index) => {
          while (index < 3) {
            return (
              <div style={{ marginTop: "16px" }} key={index}>
                <TitleHead>
                  Read More On{" "}
                  <Link to={`/category/${tag.category}`}>{tag.category}</Link>
                </TitleHead>
                {data.PostFeed.posts
                  .filter((post) => post.category === tag.category)
                  .map((post, index) => (
                    <Link
                      to={`/post/${post.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Banner key={index}>
                        <PostPreview
                          title={post.title}
                          createdAt={post.createdAt}
                          blurb={post.blurb}
                          content={post.content}
                        />
                      </Banner>
                    </Link>
                  ))}
              </div>
            );
          }
        })}
      </Left>
    </Body>
  );
};

export default Writings;
