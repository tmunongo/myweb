import { gql } from '@apollo/client';

const DELETE_POST = gql`
    mutation deletePost($id: ID!) {
        deletePost(id: $ID)
    }
`;

export {
    DELETE_POST
};