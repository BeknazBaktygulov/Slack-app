import styled from "styled-components";
import React from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoIcon from '@material-ui/icons/Info';
import { useSelector } from "react-redux";
import ChatInput from "./ChatInput";
import { selectRoomId } from "./features/appSlice";

function Chat() {
    const roomId = useSelector(selectRoomId);


    return (
        <ChatContainer>
            <>
            <h2>I am the chat screen</h2>
            <Header>
                <HeaderLeft>
                    <h4><strong>#Room name</strong></h4>
                    <StarBorderIcon />
                </HeaderLeft>
                <HeaderRight>
                    <p>
                        <InfoIcon /> Details 
                    </p>

                </HeaderRight>

            </Header>
            <ChatMessages>
                {/* List out the messages  */}
            </ChatMessages>
            <ChatInput channelId={roomId} />
            </>
        </ChatContainer>
    )
}

export default Chat

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

const ChatMessages = styled.div`

`;

const HeaderLeft = styled.div`

    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }

    > h4 > .MuiSvgIcon-root {
        margin-left: 20px;
        font-size: 10px;
    }
`;

const HeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }

    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }

`;


const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`;