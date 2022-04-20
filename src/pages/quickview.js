import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'

//import components
import PostFeed from '../components/PostFeed'
import Button from '../components/Button'
import TitleBox from '../components/TitleBox'

//import gql
import { GET_POSTS } from '../gql/query'

const QuickView = () => {
  useEffect(() => {
    document.title = 'Tawanda - Quick View'
  })
  //query hook
  const { data, loading, error, fetchMore } = useQuery(GET_POSTS, {
    fetchPolicy: 'network-only',
  })

  if (loading) return <p>Loading posts...</p>
  if (error) return <p>Error!</p>
  return (
    <React.Fragment>
      <TitleBox>Writings</TitleBox>
      <PostFeed posts={data.PostFeed.posts} />
      {/* load more only if hasNextPage true */}
      {data.PostFeed.hasNextPage && (
        <Button
          onClick={() =>
            fetchMore({
              variables: {
                cursor: data.Postfeed.cursor,
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                return {
                  PostFeed: {
                    cursor: fetchMoreResult.Postfeed.cursor,
                    hasNextPage: fetchMoreResult.Postfeed.hasNextPage,
                    //combine new and old results
                    posts: [
                      ...previousResult.Postfeed.posts,
                      ...fetchMoreResult.Postfeed.posts,
                    ],
                    __typename: 'PostFeed',
                  },
                }
              },
            })
          }
        >
          Load More
        </Button>
      )}
    </React.Fragment>
  )
}

export default QuickView
