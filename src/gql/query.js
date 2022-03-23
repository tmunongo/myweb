import { gql } from '@apollo/client';

const GET_POSTS = gql`
query PostFeed($cursor: String) {
	PostFeed(cursor: $cursor) {
		cursor
		hasNextPage
		posts {
			id
            title
            blurb
			createdAt
			content
            category
            createdAt
            coverUrl
			favoriteCount
			author {
				username
				id
                fullname
				avatar
			}
		}
	}
}
`;

const GET_POST = gql`
query post($id: ID!) {
    post(id: $id) {
        id
        title
        createdAt
        blurb
        content
        category
        coverUrl
        favoriteCount
        author {
            username
            id
            fullname
            avatar
        }
    }
}
`;

const IS_LOGGED_IN = gql`
    {
        isLoggedIn @client
    }
`;


export {
    GET_POSTS,
    GET_POST,
	IS_LOGGED_IN
};