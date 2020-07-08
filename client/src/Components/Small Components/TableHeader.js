import React from "react";
import styled from "styled-components";

const HeaderDivStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
  justify-items: center;
  margin: 0px 0px 5px 0px;
  width: 100%;
  height: 23px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
`;

const NumberStyle = styled.div`
  display: flex;
  align-items: center;
`;

const TeamStyle = styled.div`
  display: flex;
  align-items: center;
`;

const MatchesStyle = styled.div`
  display: flex;
  align-items: center;
`;

const WinsStyle = styled.div`
  display: flex;
  align-items: center;
`;

const DrawsStyle = styled.div`
  display: flex;
  align-items: center;
`;

const LossesStyle = styled.div`
  display: flex;
  align-items: center;
`;

const RatioStyle = styled.div`
  display: flex;
  align-items: center;
`;

const PointsStyle = styled.div`
  display: flex;
  align-items: center;
`;

const FormStyle = styled.div`
  display: flex;
  align-items: center;
`;

const TableHeader = () => {
  return (
    <HeaderDivStyle>
      <NumberStyle>
        <span>#</span>
      </NumberStyle>
      <TeamStyle>Team</TeamStyle>
      <MatchesStyle>Matches</MatchesStyle>
      <WinsStyle>Wins</WinsStyle>
      <DrawsStyle>Losses</DrawsStyle>
      <LossesStyle>Draws</LossesStyle>
      <RatioStyle>Ratio</RatioStyle>
      <PointsStyle>Goals</PointsStyle>
      <FormStyle>Form</FormStyle>
    </HeaderDivStyle>
  );
};

export default TableHeader;
