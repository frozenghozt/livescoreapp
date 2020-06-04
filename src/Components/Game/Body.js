import React from "react";
import { Switch, Route } from "react-router-dom";
import Results from "./Results";
import LeagueTable from "./LeagueTable";
import { device } from "../../Objects/devices";
import styled from "styled-components";

const BodyDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 30px 3vw;
  overflow-x: hidden;
  overflow-y: scroll;
  @media ${device.mobileL} {
    padding: 15px 2vw;
  }
`;

const Body = (props) => {
  return (
    <BodyDivStyle>
      <Switch>
        <Route exact path="/" component={Results} />
        <Route path="/premier" component={LeagueTable} />
      </Switch>
    </BodyDivStyle>
  );
};

export default Body;
