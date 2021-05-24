import styled from "styled-components";
import React from 'react'
import { Button } from "@material-ui/core";

function Login() {

    const signIn = (e) => {
        e.preventDefault();
        
    }


    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="https://cdn.dribbble.com/users/1238764/screenshots/5864612/slack-animation.gif" alt="slack-logo" />
                <h1>Sign in</h1>
                <p>enelbbs9@gmail.com</p>
                <Button type='submit' onClick={signIn}>
                    Sign in with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const LoginInnerContainer = styled.div`

    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

`;