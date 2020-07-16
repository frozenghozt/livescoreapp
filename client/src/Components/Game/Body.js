import React from "react";
import { Switch, Route } from "react-router-dom";
import Results from "./Results";
import LeagueTable from "./LeagueTable";
import { device } from "../../objects/devices";
import styled from "styled-components";
import Slider from "./../Small Components/Slider";
import Login from "../Small Components/Login";

const BodyDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 30px 5vw;
  overflow-x: hidden;
  overflow-y: scroll;
  @media ${device.mobileL} {
    padding: 15px 2vw;
  }
`;

const Body = () => {
  return (
    <BodyDivStyle>
      <Switch>
        <Route exact path="/">
          <Slider />
          <Results />
        </Route>
        <Route exact path="/premierleague">
          <LeagueTable />
        </Route>
      </Switch>
      <Route path="/" component={Login} />
    </BodyDivStyle>
  );
};

export default Body;
