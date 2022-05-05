import React from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'

//import Post component
import Post from '../components/Post'
import { GET_POST_BY_SLUG } from '../gql/query'
import Loading from '../components/Loading'

const PostPage = () => {
  let { slug } = useParams()

  const { loading, error, data } = useQuery(
    GET_POST_BY_SLUG,
    { variables: { slug } },
    { fetchPolicy: 'no-cache' }
  )

  if (loading) return <Loading type={'cubes'} color={'#8EE0F5'} />
  if (error) return <p>Error - Post Does Not Exist</p>

  return (
    <div>
      <Post post={data.postBySlug} />
    </div>
  )
}

export default PostPage
