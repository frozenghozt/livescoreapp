import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatSubmit from "./ChatSubmit";
import styled from "styled-components";
import { device } from "../../objects/devices";

const ChatDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  flex-shrink: 0;
  height: 100vh;
  z-index: 900;
  background-color: #0f212e;
  @media ${device.laptop} {
    display: none;
  }
`;

const ChatWrapper = () => {
  return (
    <ChatDivStyle>
      <ChatHeader />
      <ChatMessages />
      <ChatSubmit />
    </ChatDivStyle>
  );
};

export default ChatWrapper;
