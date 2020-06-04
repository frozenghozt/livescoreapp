import React from "react";
import { device } from "../../Objects/devices";
import { connect } from "react-redux";
import LeagueHeader from "./../Small Components/LeagueHeader";
import MatchResult from "./../Small Components/MatchResult";
import styled from "styled-components";

const LeagueDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5px 0px;
  padding: 5px 10px;
  background-color: #213743;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
  @media ${device.mobileM} {
    padding: 5px 10px;
  }
`;

const HeaderDivStyle = styled.div`
  display: flex;
  padding: 1px 5px 0px;
`;

const BodyDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 5px;
`;

const League = (props) => {
  const show = props.showleague.showmore;
  return (
    <LeagueDivStyle>
      <HeaderDivStyle>
        <LeagueHeader />
      </HeaderDivStyle>
      {show ? (
        <BodyDivStyle>
          <MatchResult />
          <MatchResult />
        </BodyDivStyle>
      ) : null}
    </LeagueDivStyle>
  );
};

const mapStateToProps = (state) => {
  return {
    showleague: state.showmore,
  };
};

export default connect(mapStateToProps)(League);
