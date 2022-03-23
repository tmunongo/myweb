import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

//import Post component
import Post from '../components/Post';
import { GET_POST } from "../gql/query";

const PostPage = () => {
    let { id } = useParams();

    const { loading, error, data } = useQuery(
        GET_POST,
        { variables: { id } },
        { fetchPolicy: "no-cache" } 
    );

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error - Post Does Not Exist</p>;

    return (
        <div>
            <Post post={data.post} />
        </div>
    );
};

export default PostPage;