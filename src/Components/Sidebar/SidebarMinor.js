import React from "react";
import styled from "styled-components";
import Champions from "./../../Assets/Images/Champions.svg";

const MinorDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 10px 0px 10px 0px;
`;

const MinorTitleStyle = styled.div`
  width: 100%;
  margin: 0px 0px 7px 0px;
  & span {
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const MinorLeaguesStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 10px 0px;
  & span:hover {
    transform: translateX(5px);
    transition: transform 200ms ease-in-out 0s;
  }
`;

const LeagueItemStyle = styled.div`
  display: flex;
  width: 100%;
  padding: 4px 0px;
  cursor: pointer;
  & img {
    width: 16px;
    height: auto;
  }
  & span {
    color: #557086;
    font-size: 14px;
    font-weight: 500;
    margin: 0px 0px 0px 8px;
  }
`;

const SidebarMinor = () => {
  return (
    <MinorDivStyle>
      <MinorTitleStyle>
        <span>Other Leagues</span>
      </MinorTitleStyle>
      <MinorLeaguesStyle>
        <LeagueItemStyle>
          <img src={Champions} alt="Champions" />
          <span>Premiere League</span>
        </LeagueItemStyle>
        <LeagueItemStyle>
          <img src={Champions} alt="Champions" />
          <span>Ligue 1</span>
        </LeagueItemStyle>
        <LeagueItemStyle>
          <img src={Champions} alt="Champions" />
          <span>Bundesliga</span>
        </LeagueItemStyle>
        <LeagueItemStyle>
          <img src={Champions} alt="Champions" />
          <span>Serie A</span>
        </LeagueItemStyle>
        <LeagueItemStyle>
          <img src={Champions} alt="Champions" />
          <span>Eredivisie</span>
        </LeagueItemStyle>
        <LeagueItemStyle>
          <img src={Champions} alt="Champions" />
          <span>LaLiga</span>
        </LeagueItemStyle>
        <LeagueItemStyle>
          <img src={Champions} alt="Champions" />
          <span>Champions League</span>
        </LeagueItemStyle>
        <LeagueItemStyle>
          <img src={Champions} alt="Champions" />
          <span>Europa League</span>
        </LeagueItemStyle>
      </MinorLeaguesStyle>
    </MinorDivStyle>
  );
};

export default SidebarMinor;
