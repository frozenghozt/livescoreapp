import React from "react";
import styled from "styled-components";

const MessageDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 20px 17px 0px 17px;
`;

const Message = styled.div`
  color: #fff;
  width: 100%;
  font-size: 14px;
  padding: 8px 8px;
  margin: 3px 0px;
  background-color: #253742;
  border-radius: 4px;
`;

const ChatMessages = () => {
  return (
    <MessageDiv>
      <MessageBox>
        <Message>
          <p>Olá, tudo bem?</p>
        </Message>
        <Message>
          <p>Sim e contigo?</p>
        </Message>
        <Message>
          <p>Também, obrigado.</p>
        </Message>
        <Message>
          <p>Venho já</p>
        </Message>
        <Message>
          <p>Okay, até já.</p>
        </Message>
      </MessageBox>
    </MessageDiv>
  );
};

export default ChatMessages;
