import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SidebarWrapper from "./Components/Sidebar/SidebarWrapper";
import GameWrapper from "./Components/Game/GameWrapper";
import ChatWrapper from "./Components/Chat/ChatWrapper";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const WebApp = () => {
  return (
    <Router>
      <FlexContainer>
        <SidebarWrapper />
        <GameWrapper />
        <ChatWrapper />
      </FlexContainer>
    </Router>
  );
};

export default WebApp;
