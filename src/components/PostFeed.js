import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Post from './Post';

const PostWrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid white;
`;


const PostFeed = ({ posts }) => {
    return (
        <div className="post-feed">
            {posts.map(post => (
            <PostWrapper key={post.id}>
                <Post post={post} />
                <Link to={`post/${post.id}`}>Permalink</Link>      
            </PostWrapper>
            ))}
        </div>
    );
};

export default PostFeed;