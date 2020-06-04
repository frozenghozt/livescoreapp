import React from "react";
import styled from "styled-components";

const HeaderDivStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  min-height: 60px;
`;

const ChatSpanStyle = styled.span`
  display: flex;
  align-items: center;
  margin-right: auto;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
`;

const ChatOnlineDivStyle = styled.div`
  display: flex;
  align-items: center;
`;

const ChatLightStyle = styled.span`
  background: rgb(18, 196, 2);
  border-radius: 50%;
  height: 7px;
  width: 7px;
  margin: 0;
  box-shadow: 0 0 0 rgb(18, 196, 2);
  animation: pulse 1.6s infinite;
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(18, 196, 2, 0.7);
    }

    70% {
      box-shadow: 0 0 0 6px rgba(18, 196, 2, 0);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(18, 196, 2, 0);
    }
  }
`;

const UsersOnlineStyle = styled.span`
  display: inline-flex;
  font-size: 14px;
  margin-left: 7px;
  font-weight: 500;
  color: #fff;
`;

const ChatHeader = () => {
  return (
    <HeaderDivStyle>
      <ChatSpanStyle>Chat</ChatSpanStyle>
      <ChatOnlineDivStyle>
        <ChatLightStyle />
        <UsersOnlineStyle>2458</UsersOnlineStyle>
      </ChatOnlineDivStyle>
    </HeaderDivStyle>
  );
};

export default ChatHeader;
