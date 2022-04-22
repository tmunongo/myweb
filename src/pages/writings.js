import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
//import components
import essays from '../img/essays.jpg'
import fiction from '../img/fiction.jpg'
import freeWriting from '../img/free-writing.jpg'
import { formatDistanceToNow } from 'date-fns'

//import gql
import { GET_POSTS } from '../gql/query'

const Banner = styled.div`
  color: white;
  padding: 0px 0px 10px 0px;

  @media (min-width: 700px) {
    padding: 0px calc(10%) 0px calc(10%);
  }

  @media (max-width: 700px) {
    padding-left: 5px;
  }
`

const Blurb = styled.span``

const Image = styled.img`
  width: calc(100%);
  height: auto;
  background-position-y: center;
`

const Wrap = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr 1fr;
  gap: 25px;
  grid-auto-rows: minmax(auto, auto);
  padding: 25px calc(15%) 0px calc(15%);
`

const One = styled.div`
  grid-column: 1;
  grid-row: 1;
  flex: auto;
  @media (max-width: 700px) {
    border: 2px solid white;
  }
`

const Two = styled.div`
  grid-column: 1;
  grid-row: 2;
  @media (max-width: 700px) {
    border: 2px solid white;
  }
`

const Three = styled.div`
  grid-column: 1;
  grid-row: 3;
  @media (max-width: 700px) {
    border: 2px solid white;
  }
`

const Feat = styled.h2`
  font-style: oblique;
  padding: 5px 0px 5px 20px;
  margin: 0px 60px 0px 60px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: bold;
  border: 2px solid #7fe3d8;
  border-radius: 0.375rem;
  color: white;
  @media (max-width: 700px) {
    margin: 0px 0px 10px 0px;
    padding: 10px 0px 10px 20px;
  }
`

const Body = styled.div`
  @media (min-width: 700px) {
    columns: 2;
    display: grid;
    max-width: calc(90%);
    grid-auto-columns: 75% 25%;
    padding: 50px 5px 25px 5px;
    margin: 0px calc(100% - 95%) 0px calc(100% - 95%);
  }
  background: #1f1f1f;
`

const Left = styled.div`
  grid-column: 1;
  @media (min-width: 700px) {
    border-right: 1px solid white;
  }
`

const Middle = styled.div`
  grid-column: 2;
  // @media (min-width: 700px){
  //     border-right: 1px solid white;
  // }
  @media (max-width: 700px) {
    display: none;
  }
`
const Article = styled.article`
  padding: 0px 0px 10px 5px;
  border-bottom: 1px solid #7fe3d8;
`

const Text3 = styled.span`
  grid-row-start: row3;
  grid-row-end: rowend;
  grid-column-start: column2;
`

const Title = styled.h2`
  text-decoration: underline;
  font-size: 18px;
  margin-bottom: 5px;
  text-transform: capitalize;
  @media (max-width: 700px) {
    margin: 0px 0px 5px 0px;
  }
`

function formatDate(timestamp) {
  return formatDistanceToNow(new Date(timestamp), { addSuffix: true })
}

function readTime(text) {
  const wpm = 225
  const words = text.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)
  return time
}

const Writings = () => {
  useEffect(() => {
    document.title = 'Tawanda Munongo - Writings'
  })

  const { data, loading, error } = useQuery(GET_POSTS, {})

  //if data loading, display message
  if (loading) return <p style={{ textAlign: 'center' }}>Loadin'...</p>
  //if there is an error, display error message
  if (error) return <p>Error!</p> + error.message
  //if there is no data
  if (!data) return <p>Not found</p>

  //if fetch successful, display in UI
  return (
    <Body>
      <Left>
        <Feat> Featured </Feat>
        {data.PostFeed.posts.map((post) => (
          <Banner>
            <Article className="postList" key={post.id}>
              <Title>{post.title}</Title>
              <Text3>
                Posted: {formatDate(post.createdAt)} {' | '}
                {readTime(post.content)} min read
              </Text3>
              <div>
                <Blurb>{post.blurb}</Blurb> <br />
                <Link to={`/post/${post.id}`}>Read More</Link>
              </div>
            </Article>
          </Banner>
        ))}
      </Left>
      <Middle>
        <h3 style={{ 'padding-left': '10px', 'margin-bottom': '5px' }}>
          Categories coming soon...
        </h3>
        <Wrap>
          <One>
            <Image src={essays} alt="essays" />
          </One>
          <Two>
            <Image src={fiction} alt="fiction" />
          </Two>
          <Three>
            <Image src={freeWriting} alt="freeWriting" />
          </Three>
        </Wrap>
      </Middle>
    </Body>
  )
}

export default Writings