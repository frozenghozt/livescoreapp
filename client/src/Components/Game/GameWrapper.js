import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import styled from "styled-components";

const GameDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #192c38;
`;

const GameWrapper = () => {
  return (
    <GameDivStyle>
      <Header />
      <Body />
      <Footer />
    </GameDivStyle>
  );
};

export default GameWrapper;
