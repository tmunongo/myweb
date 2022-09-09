import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query PostFeed($cursor: String) {
    PostFeed(cursor: $cursor) {
      cursor
      hasNextPage
      posts {
        id
        title
        blurb
        caption
        createdAt
        content
        category
        createdAt
        coverUrl
        favoriteCount
        slug
        author {
          username
          id
          fullname
          avatar
        }
      }
    }
  }
`;

const GET_POST = gql`
  query post($id: ID!) {
    post(id: $id) {
      id
      title
      createdAt
      blurb
      caption
      content
      category
      coverUrl
      slug
      favoriteCount
      author {
        username
        id
        fullname
        avatar
      }
    }
  }
`;

const GET_POST_BY_SLUG = gql`
  query postBySlug($slug: String!) {
    postBySlug(slug: $slug) {
      id
      title
      createdAt
      blurb
      caption
      content
      category
      coverUrl
      slug
      favoriteCount
      author {
        username
        id
        fullname
        avatar
      }
    }
  }
`;

const GET_POSTS_BY_TAG = gql`
  query PostsByTag($tag: String!) {
    postsByTag(tag: $tag) {
      title
      id
      slug
      blurb
      caption
      category
      content
      author {
        fullname
        id
        username
      }
      coverUrl
      createdAt
      updatedAt
    }
  }
`;

const IS_LOGGED_IN = gql`
  {
    isLoggedIn @client
  }
`;

export {
  GET_POSTS,
  GET_POST,
  GET_POST_BY_SLUG,
  GET_POSTS_BY_TAG,
  IS_LOGGED_IN,
};
