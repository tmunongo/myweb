import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

import styled from 'styled-components'
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  PocketIcon,
  PocketShareButton,
  TwitterIcon,
  TwitterShareButton,
  TumblrIcon,
  TumblrShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
} from 'react-share'
import { Fade } from 'react-reveal'

//import query
//import logged in user UI components

//import admin UI components

//import login check local query

//styling
const StyledPost = styled.article`
  display: inline-grid;
  grid-template-columns: [first] calc(20%) [second] calc(60%) [third] calc(20%);
  max-width: calc(100%);
  margin: 0 auto;
  @media (max-width: 700px) {
    grid-template-columns: [first] calc(5%) [second] calc(90%) [third] calc(5%);
    background: black;
  }
`
//post metadata
const MetaData = styled.div`
  @media (min-width: 700px) {
    align-items: top;
  }
  border: 2px solid #7fe3d8;
  border-radius: 0.375rem;
  grid-column-start: second;
  grid-column-end: third;
  display: grid;
  grid-template-columns: [first] calc(15%) [second] 85% [end];
  grid-template-rows: [first] 33% [second] 33% [third] 33% [rowend];
`
//add space b/w avatar and metaInfo
const MetaInfo = styled.div`
  grid-column-start: first;
  grid-column-end: third;
  grid-row-start: first;
  grid-row-end: rowend;
  color: #b4b4b4;
  padding: 0px 30px 10px 30px;
  @media (max-width: 700px) {
    padding: 0px 10px 10px 20px;
  }
`

const Name = styled.h3`
  margin: 5px 0px 5px 0px;
  text-transform: capitalize;
  font-size: 20px;
  color: white;
`

const Body = styled.div`
  color: #b4b4b4;
  grid-column-start: second;
  grid-column-end: third;
  margin-top: 0;
  @media (min-width: 700px) {
    border-bottom: 2px solid white;
    margin: 0px 0px 10px 0px;
    padding-bottom: 5px;
  }
  @media (max-width: 700px) {
    border-bottom: 2px solid white;
  }
`

const Image = styled.img`
  max-width: calc(100%);
  align-items: center;
`

const Share = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Title = styled.h2`
  color: white;
  font-weight: bold;
  grid-column-start: second;
  grid-column-end: third;
  margin-bottom: 0px;
`

const TimeStamp = styled.h3`
  margin: 0px 0px 10px 0px;
  color: #95d779;
  font-size: 13px;
  width: calc(100%);
  @media (max-width: 700px) {
    width: calc(100%);
  }
`

function readTime(text) {
  const wpm = 225
  const words = text.trim().split(/\s+/).length
  const time = Math.ceil(words / wpm)
  return time
}

const Post = ({ post }) => {
  useEffect(() => {
    document.title = `${post.title} - Tawanda Munongo`
  })
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  let date = new Date(post.createdAt).toLocaleDateString(undefined, options)
  return (
    <StyledPost>
      <Title className="headerName">{post.title}</Title> <br />
      <Body>
        <TimeStamp>
          <span style={{ color: '#8EE0F5' }}>posted</span>({date}),{' '}
          <span style={{ color: '#8EE0F5' }}>readTime</span>(
          {readTime(post.content)} min)
        </TimeStamp>
        <Image src={post.coverUrl} alt={post.title} />
        <Fade bottom>
          <ReactMarkdown className="blogContent" children={post.content} />
        </Fade>
        <Share>
          <EmailShareButton
            url={`https://tawandamunongo.netlify.app/#/post/${post.id}`}
            subject={post.title}
            body={post.blurb}
          >
            <EmailIcon size={32} round={true} />
          </EmailShareButton>
          <FacebookShareButton
            url={`https://tawandamunongo.netlify.app/#/post/${post.id}`}
            quote={post.blurb}
          >
            {' '}
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          <LinkedinShareButton
            url={`https://tawandamunongo.netlify.app/#/post/${post.id}`}
          >
            <LinkedinIcon size={32} round={true} />
          </LinkedinShareButton>
          <PocketShareButton
            url={`https://tawandamunongo.netlify.app/#/post/${post.id}`}
          >
            <PocketIcon size={32} round={true} />
          </PocketShareButton>
          <TelegramShareButton
            url={`https://tawandamunongo.netlify.app/#/post/${post.id}`}
            title={post.title}
          >
            <TelegramIcon size={32} round={true} />
          </TelegramShareButton>
          <TwitterShareButton
            url={`https://tawandamunongo.netlify.app/#/post/${post.id}`}
            related={'@edtha3rd'}
          >
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <WhatsappShareButton
            url={`https://tawandamunongo.netlify.app/#/post/${post.id}`}
          >
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </Share>
      </Body>
      <MetaData>
        {/* <BioPic
          src={Avatar}
          alt={`${post.author.username} avatar`}
          height="90px"
        /> */}
        <MetaInfo>
          <Fade>
            <Name>
              {post.author.fullname}
              <strong
                style={{
                  fontSize: 10,
                  color: 'purple',
                  fontStyle: 'oblique',
                }}
              >
                {' '}
                AUTHOR{' '}
              </strong>
            </Name>{' '}
            Seeking truth, wisdom, and, above all, enlightenment | Lover of
            fiction | Computer Scientist | My short fiction has been published
            in Ab Terra Flash Fiction, The Rush Magazine, and Literary Heist
            Magazine |
            {/* {post.author.fullname} <br />
                    {post.author.username} <br />
                    {post.createdAt}
                  {format(post.createdAt, "MMM Do YYYY")} */}
          </Fade>
        </MetaInfo>
      </MetaData>
    </StyledPost>
  )
}

export default Post
