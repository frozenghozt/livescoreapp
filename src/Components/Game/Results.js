import React from "react";
import FavMatches from "./FavMatches";
import League from "./League";
import { device } from "../../Objects/devices";
import styled from "styled-components";

const ResultsDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 2vw;
  align-items: center;
  position: relative;
  @media ${device.mobileL} {
    padding: 10px 2vw;
  }
`;

const Results = () => {
  return (
    <ResultsDivStyle>
      <FavMatches />
      <League />
    </ResultsDivStyle>
  );
};

export default Results;
