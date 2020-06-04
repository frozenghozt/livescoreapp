import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import IosArrowDown from "react-ionicons/lib/IosArrowDown";

const HeaderDivStyle = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  width: 100%;
  margin: 4px 0px 6px;
`;

const LeagueNameStyle = styled.div`
  display: flex;
  justify-self: start;
  align-self: center;
  color: #fff;
  font-size: 14px;
`;

const LeagueHeader = ({ dispatch }) => {
  return (
    <HeaderDivStyle>
      <LeagueNameStyle>
        <img src="" alt="" />
        <span>Premiere League</span>
      </LeagueNameStyle>
      <IosArrowDown
        style={{
          cursor: "pointer",
          justifySelf: "end",
          alignSelf: "center",
        }}
        color="#FFF"
        fontSize="18px"
        onClick={() => dispatch({ type: "SET_SHOW_MORE" })}
      />
    </HeaderDivStyle>
  );
};

export default connect()(LeagueHeader);
