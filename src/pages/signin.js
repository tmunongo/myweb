import React, { useEffect } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';
import styled from 'styled-components';

import UserForm from '../components/UserForm';

const SIGNIN_USER = gql`
    mutation signIn($email: String, $password: String!){
        signIn(email: $email, password: $password)
    }
`;

const Error = styled.p`
    text-align: center;
`;

const SignIn = props => {
        useEffect(() => {
            //update the document title
            document.title = 'Sign In - Tawanda Munongo';
        });
        
        const client = useApolloClient();

        const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
            onCompleted: data => {
                localStorage.setItem('token', data.signIn);
                client.modify({ data: { isLoggedIn: true } });
                props.history.push('/');
            }
        });

        return (
            <React.Fragment>
                <UserForm action={signIn} formType="signin" />
                {loading && <Error>Loading...</Error>}
                {error && <Error> {error.message} </Error>}
            </React.Fragment>
        );
};

export default SignIn;
