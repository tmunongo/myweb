import React from 'react'
import { useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'

//import Post component
import Post from '../components/Post'
import { GET_POST } from '../gql/query'
import Loading from '../components/Loading'

const PostPage = () => {
  let { id } = useParams()

  const { loading, error, data } = useQuery(
    GET_POST,
    { variables: { id } },
    { fetchPolicy: 'no-cache' }
  )

  if (loading) return <Loading type={'cubes'} color={'#8EE0F5'} />
  if (error) return <p>Error - Post Does Not Exist</p>

  return (
    <div>
      <Post post={data.post} />
    </div>
  )
}

export default PostPage
