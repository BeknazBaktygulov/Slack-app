import { Button } from '@material-ui/core';
import React, { useRef, useState } from 'react'
import styled from "styled-components";
import { db } from './firebase';
import firebase from 'firebase';

function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Beknaz Baktygulov',
            userImage: 'https://sun9-63.userapi.com/c621625/v621625834/36784/eXVcZDlhxfM.jpg'
        })
        setInput('')
    }

    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={e => setInput(e.target.value)}   placeholder={`Message #${channelName}`} />
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }


    > form > input {
        position: fixed;
        border-radius: 3px;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        padding: 20px;
        outline: none;
    }


    > form > button {
        display: none !important;
    }
`; 