import React from "react";
import styled from "styled-components";

const LiveStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
  padding: 3px 6px;
  color: #fff;
  font-size: 9px;
  font-weight: 500;
  margin: 0px 8px;
  background-color: #eb2c2d;
  border-radius: 4px;
  animation: live 1.6s infinite;
  @keyframes live {
    0% {
      box-shadow: 0 0 0 0 rgba(235, 44, 45, 0.7);
    }

    70% {
      box-shadow: 0 0 0 6px rgba(235, 44, 45, 0);
    }

    100% {
      box-shadow: 0 0 0 0 rgba(235, 44, 45, 0);
    }
  }
`;

const LiveSignal = () => {
  return <LiveStyle>LIVE</LiveStyle>;
};

export default LiveSignal;
