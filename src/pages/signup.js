import React, {useEffect } from 'react';
import styled from 'styled-components';
import { useMutation, useApolloClient, gql } from '@apollo/client';

//import components
import UserForm from '../components/UserForm';

//design elements
const Wrapper = styled.div`
    border: 1px solid #f5f4f0;
    max-width: 500px;
    padding: 1em;
    margin: 0 auto;
    margin-top: 128px;
`;

const SIGNUP_USER = gql`
    mutation signUp($email: String!, $username: String!, $password: String!) {
        signUp(email: $email, username: $username, password: $password)
    }
`;

//include the props passed to the component
const SignUp = props => {
    useEffect(() => {
        //update the document title
        document.title = 'User Sign Up';
    });

    //Apollo Client
    const client = useApolloClient();
    //add mutation hook
    const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
        onCompleted: data => {
            //store JWT in local storage
            localStorage.setItem('token', data.signUp);
            client.modify({ data: {isLoggedIn: true } });
            //redirect to home page
            props.history.push('/');
        }
    });

    return (
        <Wrapper>
            <UserForm action={signUp} formType="signup" />
            {loading && <p>Loading...</p>}
            {error && <p>Error creating an account!</p>} + error.message
        </Wrapper>
    );
};

export default SignUp;