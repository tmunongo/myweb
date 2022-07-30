import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
//import components
import Loading from '../components/Loading'
import essays from '../img/essays.jpg'
import fiction from '../img/fiction.jpg'
import freeWriting from '../img/free-writing.jpg'

//import gql
import { GET_POSTS } from '../gql/query'

const Article = styled.article`
  border-bottom: 1px solid ${({ theme }) => (theme.dark ? 'white' : 'black')};
  padding: 0px 0px 10px 5px;
`
const Banner = styled.div`
  color: ${({ theme }) => theme.colors.text};
  padding: 0px 0px 10px 0px;

  @media (min-width: 700px) {
    padding: 0px calc(10%) 0px calc(10%);
  }

  @media (max-width: 768px) {
    margin-left: 2%;
    padding: 5px;
    max-width: 95vw;
  }
`

const Blurb = styled.p`
  margin: 5px 15px 0px 15px;
  padding: 0px 0px 0px 0px;
`

const Image = styled.img`
  border-radius: 10%;
  width: calc(100%);
  height: auto;
  background-position-y: center;
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
  @media (min-width: 768px) {
    border: 2px solid ${({ theme }) => (theme.dark ? '#7fe3d8' : '#0077cc')};
  }
  border-radius: 0.375rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 17px;
  font-style: oblique;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0px 60px 0px 60px;
  padding: 5px 0px 5px 20px;
  text-align: center;
  @media (max-width: 700px) {
    margin: 0px 0px 10px 0px;
    padding: 10px 0px 10px 20px;
  }
`

const Body = styled.div`
  border-radius: 0.3rem;
  @media (min-width: 768px) {
    columns: 2;
    display: grid;
    margin: 4% 8%;
    max-width: calc(90%);
    grid-auto-columns: 75% 25%;
    padding: 50px 5px 25px 5px;
  }
  @media (max-width: 768px) {
    margin: 5% 5%;
  }
  // background: #1f1f1f;
`

const Error = styled.div`
  height: 60vh;
  text-align: center;
`

const ErrorMessage = styled.span`
  font-size: 18px;
  font-weight: bolder;
`

const Left = styled.div`
  grid-column: 1;
  @media (min-width: 700px) {
    border-right: 1px solid white;
  }
`

const Middle = styled.div`
  grid-column: 2;
  @media (max-width: 700px) {
    display: none;
  }
`

const SpanText = styled.span`
  color: ${({ theme }) => (theme.dark ? '#8EE0F5' : '#48C0DE')};
`

const TagBody = styled.div`
  border: 2px solid ${({ theme }) => (theme.dark ? '#7fe3d8' : '#0077cc')};
  border-radius: 0.375rem;
  margin: 10px 80px 10px 80px;
  padding: 5px;
`

const Tags = styled.button`
  border-radius: 50px;
  border-style: none;
  font-size: 12px;
  font-weight: bold;
  margin: 5px;
  padding: 5px;
`

const TimeStamp = styled.h3`
  margin: 0px 15px 2px 0px;
  color: ${({ theme }) => (theme.dark ? '#95d779' : '#4C6E3E')};
  font-size: 13px;
  width: calc(100%);
  @media (max-width: 700px) {
    width: calc(100%);
  }
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  margin-bottom: 5px;
  text-decoration: underline;
  text-transform: capitalize;
  @media (max-width: 700px) {
    margin: 0px 0px 5px 0px;
  }
`
const Wrap = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr 1fr;
  gap: 25px;
  grid-auto-rows: minmax(auto, auto);
  padding: 25px calc(15%) 0px calc(15%);
`
function readTime(text) {
  const wpm = 225
  const words = text.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)
  return time
}

const Writings = () => {
  const [selectedTag, setTag] = useState('')
  useEffect(() => {
    document.title = 'Tawanda Munongo - Writings'
  })

  const { data, loading, error } = useQuery(GET_POSTS, {})
  const [filteredList, setFilteredList] = useState([])

  //if data loading, display message
  // if (loading) return <p>Loading...</p>
  if (loading) return <Loading type={'cubes'} color={'#0077cc'} />
  //if there is an error, display error message
  if (error)
    return (
      <Error
        className="wifeBeater"
        style={{ margin: '4% 8%', borderRadius: '0.375rem', padding: '12px' }}
      >
        <ErrorMessage>Oops! {error.message}</ErrorMessage>
        <Link to="/">
          <p>Return Home</p>
        </Link>
      </Error>
    )
  //if there is no data
  if (!data) return <p>Not found</p>

  const formatDate = (timestamp) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    let date = new Date(timestamp).toLocaleDateString(undefined, options)
    return date
  }

  //create an array with only the unique categories from the posts object
  const uniqueTags = () => {
    const flag = {}
    let array = []
    data.PostFeed.posts.forEach((elem) => {
      if (!flag[elem.category]) {
        flag[elem.category] = true
        array.push(elem)
      }
    })
    return array
  }

  const handleTagSelection = (x, e) => {
    e.preventDefault()
    const selectedCategory = String(e.target.id)
    if (selectedCategory === x) {
      setTag('')
    } else {
      setTag(x)
      filterByTag(data.PostFeed.posts)
    }
  }

  //  function to return filtered posts
  const filterByTag = (posts) => {
    if (!selectedTag) {
      return posts
    }
    const filteredPosts = posts.map(
      (post) => post.category.indexOf(selectedTag) !== -1
    )
    console.log(selectedTag, filteredPosts)
    setFilteredList(filteredPosts)
    return filteredPosts
  }

  //if fetch successful, display in UI
  return (
    <Body className="wifeBeater">
      <Left>
        <Feat> Featured </Feat>
        {/* display tags to filter posts */}
        <TagBody>
          Tags:
          {uniqueTags().map((post, index) => {
            return (
              <Tags
                onClick={(e) => handleTagSelection(post.category, e)}
                key={index}
                style={{
                  backgroundColor: `rgb(${Math.random() * 255}, ${
                    Math.random() * 255
                  }, 0)`,
                }}
              >
                {post.category}
              </Tags>
            )
          })}
        </TagBody>
        {data.PostFeed.posts.map((post, index) => (
          <Banner>
            <Article className="postList" key={index}>
              <Title>{post.title}</Title>
              <TimeStamp>
                {/* #48C0DE */}
                <SpanText>posted</SpanText>({formatDate(post.createdAt)}),{' '}
                <SpanText>readTime</SpanText>({readTime(post.content)} min)
              </TimeStamp>
              <div>
                <Blurb>{post.blurb}</Blurb> <br />
                <Link to={`/post/${post.slug}`}>Read More</Link>
              </div>
            </Article>
          </Banner>
        ))}
      </Left>
      <Middle>
        <h3
          style={{
            paddingLeft: '10px',
            marginBottom: '5px',
            textAlign: 'center',
          }}
        >
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
