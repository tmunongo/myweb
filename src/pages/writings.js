import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
//import components
import essays from '../img/essays.jpg';
import fiction from '../img/fiction.jpg';
import freeWriting from '../img/free-writing.jpg';
import BioPic from '../components/BioPic';
import Avatar from '../img/profilepic.jpg';
import MetaData from '../components/MetaData';

//import gql
import { GET_POSTS } from '../gql/query'; 


const Banner = styled.div`
    color: white;
    padding: 0px 0px 20px 0px;

    @media (min-width: 700px) {
        padding: 0px calc(10%) 0px calc(10%);
    }

    @media (max-width: 700px) {
        padding-left: 5px;
    }
`;

const Blurb = styled.span`
    color: white;
`

const Image = styled.img`
    width: calc(100%);
    height: auto;
    background-position-y: center;
    `;

const Me = styled.img`
    width: calc(70%);
    height: auto;
    padding: 10px 0px 0px calc(25%);
`;

const Wrap = styled.div`
    display: grid;
    grid-auto-columns: 1fr 1fr 1fr;
    gap: 25px;
    grid-auto-rows: minmax(auto, auto);
    padding: 25px calc(15%) 0px calc(15%);
`;

const One = styled.div`
    grid-column: 1;
    grid-row: 1;
    flex: auto;
    @media (max-width: 700px){
        border: 2px solid white;
    }
   `;

const Two = styled.div`
    grid-column: 1;
    grid-row: 2;
    @media (max-width: 700px){
        border: 2px solid white;
    }
`;

const Three = styled.div`
    grid-column: 1;
    grid-row: 3;
    @media (max-width: 700px){
        border: 2px solid white;
    }
`;

const Feat = styled.h2`
    font-style: oblique;
    padding: 0px 0px 10px 20px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    text-transform: capitalize;
    text-decoration: underline;
    @media (max-width: 700px){
        margin: 0px 0px 0px 0px;
        padding: 10px 0px 20px 20px;
    }
`;

const Body = styled.div`
    @media (min-width: 700px){
        columns: 2;
        display: grid;
        max-width: calc(90%);
        grid-auto-columns: 75% 25%;
        padding: 50px 5px 25px 5px;
        margin: 0px calc(100% - 95%) 0px calc(100% - 95%);
    }
    background: #1f1f1f;

`;

const Left = styled.div`
    grid-column: 1;
    @media (min-width: 700px){
        border-right: 1px solid white;
    }
`;

const Middle = styled.div`
    grid-column: 2;
    // @media (min-width: 700px){
    //     border-right: 1px solid white;
    // }
    @media (max-width: 700px){
        display: none;
    }
`;

// const Right = styled.div`
//     grid-column: 3;
//     padding: 0px 10px 0px 10px;

//     @media (max-width: 700px){
//         display: none;
//     }
// `;

const Bio = styled.p`
    color: bisque;
    font-family: 'Times New Roman', Times, serif;
    padding: 0px calc(8%) calc(10%) calc(8%);
    border-bottom: 1px solid white;
`;

const Article = styled.article`
    padding: 0px 0px 10px 5px;
    border-bottom: 1px solid white;
`;

const Text1 = styled.span`
    grid-row-start: row1;
    grid-row-end: row2;
    grid-column-start: column2;
`
const Text2 = styled.span`
    grid-row-start: row2;
    grid-row-end: row3;
    grid-column-start: column2;
`
const Text3 = styled.span`
    grid-row-start: row3;
    grid-row-end: rowend;
    grid-column-start: column2;
`

const Title = styled.h2`
    text-decoration: underline;
    @media (max-width: 700px){
        margin: 0px 0px 10px 0px;
    }
`

const Writings = () => {
    useEffect(() => {
        document.title = 'Tawanda Munongo - Writings';
    })

    const { data, loading, error } = useQuery( GET_POSTS );

    //if data loading, display message
    if (loading) return <p>Loadin'...</p>
    //if there is an error, display error message
    if (error) return <p>Error!</p> + error.message;
    //if there is no data
    if (!data) return <p>Not found</p>;
    
    //if fetch successful, display in UI
    return (
            <Body>
                <Left>
                    <Feat> Featured: </Feat>
                    {data.PostFeed.posts.map(post => (
                        <Banner>
                            <Article key={post.id}>
                                <Title>{post.title}</Title>
                                <MetaData>
                                    <BioPic
                                        src={Avatar}
                                        alt={`${post.author.username} avatar`}
                                        height="75px"
                                    />{' '}
                                    <Text1>{post.author.fullname}</Text1>
                                    <Text2>twitter: {post.author.username}</Text2>
                                    <Text3>Posted: {post.createdAt}</Text3>
                                    {/* {post.favoriteCount}{' '} */}
                                </MetaData>
                                <div>
                                    <Blurb>{post.blurb}</Blurb> <br />
                                    <Link to={`/post/${post.id}`}>Read More</Link>      
                                </div>
                            </Article>
                        </Banner>
                    
                    ))}
                </Left>
                <Middle>
                    <Wrap>
                            <One>
                                <Image src={essays} alt='essays' />
                            </One>
                            <Two>
                                <Image src={fiction} alt='fiction' />
                            </Two>
                            <Three>
                                <Image src={freeWriting} alt='freeWriting' />
                            </Three>
                    </Wrap>
                </Middle>
                {/* <Right>
                    <Me src={Avatar} alt="my-avatar" />
                    <Bio>
                        <strong>Tawanda Munongo </strong>
                        is a writer and student. 
                        He is currently pursuing a degree in Computer Science and Technology. 
                        His work has been published in Literary Heist and 
                        Ab Terra Flash Fiction Magazines.
                    </Bio>
                    <h3>Links</h3>
                </Right> */}
            </Body>
    );
};

export default Writings;