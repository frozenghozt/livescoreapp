import React from "react";
import styled from "styled-components";
import { device } from "../../Objects/devices";
import MdStarOutline from "react-ionicons/lib/MdStarOutline";

const EachLeagueStyle = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 60px 1fr 60px;
  margin: 2px 0px;
  width: 100%;
  @media ${device.tablet} {
    grid-template-columns: 55px auto 60px auto 20px;
  }
`;

const TimerStyle = styled.span`
  justify-self: start;
  align-self: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
`;

const ResultStyle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  text-align: center;
  padding: 4px 6px;
  border-radius: 3px;
  color: #fff;
  background-color: #192c38;
  font-size: 13px;
`;

const TeamOne = styled.span`
  color: #fff;
  font-size: 14px;
  justify-self: end;
  align-self: center;
`;

const TeamTwo = styled.span`
  color: #fff;
  font-size: 14px;
  justify-self: start;
  align-self: center;
`;

const MatchResult = () => {
  return (
    <EachLeagueStyle>
      <TimerStyle>Finished</TimerStyle>
      <TeamOne></TeamOne>
      <ResultStyle>9 - 2</ResultStyle>
      <TeamTwo></TeamTwo>
      <MdStarOutline
        style={{
          cursor: "pointer",
          justifySelf: "end",
          alignSelf: "center",
        }}
        color="#F4E122"
        fontSize="18px"
      />
    </EachLeagueStyle>
  );
};

export default MatchResult;
