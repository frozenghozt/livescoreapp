import React from "react";
import styled from "styled-components";

const EachPositionStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
  justify-items: center;
  width: 100%;
  height: 23px;
  font-size: 14px;
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

const TablePosition = () => {
  return (
    <EachPositionStyle>
      <NumberStyle>
        <span>1</span>
      </NumberStyle>
      <TeamStyle>Sporting CP</TeamStyle>
      <MatchesStyle>27</MatchesStyle>
      <WinsStyle>15</WinsStyle>
      <DrawsStyle>7</DrawsStyle>
      <LossesStyle>5</LossesStyle>
      <RatioStyle>31:13</RatioStyle>
      <PointsStyle>41</PointsStyle>
      <FormStyle>V V D D V</FormStyle>
    </EachPositionStyle>
  );
};

export default TablePosition;
