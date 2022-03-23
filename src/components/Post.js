import React from 'react';
import ReactMarkdown from 'react-markdown';
//import formal utility from date-fns
import { format } from 'date-fns';

import styled from 'styled-components';
//import query
//import logged in user UI components

//import admin UI components

//import login check local query

import Avatar from '../img/profilepic.jpg';
//import MetaData from './MetaData';

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
`;
//post metadata
const MetaData = styled.div`
    @media (min-width: 700px) {
        align-items: top;
    }
    grid-column-start: second;
    grid-column-end: third;
    display: grid;
    grid-template-columns: [first] calc(15%) [second] 85% [end];
    grid-template-rows: [first] 33% [second] 33% [third] 33% [rowend];
    border-bottom: 2px solid white;
`;
//add space b/w avatar and metaInfo
const MetaInfo = styled.div`
    grid-column-start: second;
    grid-column-end: third;
    grid-row-start: first;
    grid-row-end: rowend;
    color: white;
    padding: 0px 30px 10px 0px;
    @media (max-width: 700px) {
        padding: 0px 0px 0px 30px;
    }
`;

const BioPic = styled.img`
    border-radius: 50%;
    grid-row-start: first;
    grid-row-end: rowend;
    grid-column-start: first;
    grid-column-end: second;
    padding: 0px 0px 10px 20px;
`;

const Body = styled.p`
    color: bisque;
    grid-column-start: second;
    grid-column-end: third;
    border-bottom: 2px solid white;
    margin-top: 0;
`;

const Image = styled.img`
    max-width: calc(100%);
    align-items: center;
`

const Title = styled.h2`
    color: white;
    font-weight: bold;
    grid-column-start: second;
    grid-column-end: third;
`

const TimeStamp = styled.h3`
    margin: 0px 0px 10px 0px;
    color: white;
`

const Post = ({ post }) => {

    return (
        <StyledPost>
            <Title>{post.title}</Title> <br />
            <Body>
            <TimeStamp>{post.createdAt}</TimeStamp> 
                <Image 
                    src={post.coverUrl}
                    alt={post.title}
                />
                <ReactMarkdown children={post.content} />
            </Body>

            <MetaData>
                    <BioPic
                    src={Avatar}
                    alt={`${post.author.username} avatar`}
                    height="90px"
                    />
                 <MetaInfo>
                 {post.author.fullname} <br />
                 Seeking truth, wisdom, and, above all, enlightenment | 
                 Lover of fiction | Computer Scientist | 
                 My short fiction has been published in Ab Terra Flash Fiction, 
                 The Rush Magazine, and Literary Heist Magazine | 
                   {/* {post.author.fullname} <br />
                    {post.author.username} <br />
                    {post.createdAt}
                    {format(post.createdAt, "MMM Do YYYY")} */}
                </MetaInfo> 
            </MetaData>
        </StyledPost>
    );
};


export default Post;