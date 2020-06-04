import React from "react";
import styled from "styled-components";

const SubmitDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 20px;
  width: 100%;
  color: rgb(255, 255, 255);
`;

const SendMessage = styled.div`
  display: flex;
  position: relative;
  & input {
    color: #fff;
    padding: 0px 22% 0px 7px;
    width: 100%;
    height: 35px;
    border: none;
    box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.75);
    border-radius: 4px 0px 0px 4px;
    background-color: rgb(33, 55, 67);
    &:focus {
      outline: none;
    }
  }
  & button {
    position: absolute;
    right: 0;
    height: 35px;
    color: #013e01;
    background-color: #1fff20;
    font-size: 14px;
    font-weight: 500;
    border-radius: 4px;
    width: 20%;
    cursor: pointer;
    outline: none;
    border: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-top: 15px;
  & button {
    height: 35px;
    width: 35px;
    margin: 0px 6px 0px 0px;
    color: rgb(85, 112, 134);
    background-color: #0f212e;
    border: none;
    border: 1px solid rgb(85, 112, 134);
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      color: rgb(139, 163, 182);
      border: 1px solid rgb(139, 163, 182);
    }
  }
`;

const ChatSubmit = () => {
  return (
    <SubmitDiv>
      <SendMessage>
        <input type="text" placeholder="Send a message" />
        <button type="button">Send</button>
      </SendMessage>
      <Buttons>
        <button type="button">
          <i className="fas fa-user-friends"></i>
        </button>
        <button type="button">
          <i className="fas fa-envelope"></i>
        </button>
        <button type="button">
          <i className="fas fa-tag"></i>
        </button>
      </Buttons>
    </SubmitDiv>
  );
};

export default ChatSubmit;
