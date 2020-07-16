import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Champions from "./../../Assets/Images/Champions.svg";

const MajorDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 10px 0px 10px 0px;
`;

const MajorTitleStyle = styled.div`
  width: 100%;
  margin: 0px 0px 7px 0px;
  & span {
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const MajorLeaguesStyle = styled.div`
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
  align-items: center;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const SidebarMajor = () => {
  return (
    <MajorDivStyle>
      <MajorTitleStyle>
        <span>Most Popular</span>
      </MajorTitleStyle>
      <MajorLeaguesStyle>
        <LeagueItemStyle>
          <StyledLink to="/premierleague">
            <img src={Champions} alt="Champions" />
            <span>Premiere League</span>
          </StyledLink>
        </LeagueItemStyle>
        <LeagueItemStyle>
          <StyledLink to="/ligueone">
            <img src={Champions} alt="Champions" />
            <span>Ligue 1</span>
          </StyledLink>
        </LeagueItemStyle>
        <LeagueItemStyle>
          <StyledLink to="/bundesliga">
            <img src={Champions} alt="Champions" />
            <span>Bundesliga</span>
          </StyledLink>
        </LeagueItemStyle>
        <LeagueItemStyle>
          <StyledLink to="/seriea">
            <img src={Champions} alt="Champions" />
            <span>Serie A</span>
          </StyledLink>
        </LeagueItemStyle>
        <LeagueItemStyle>
          <StyledLink to="/eredivisie">
            <img src={Champions} alt="Champions" />
            <span>Eredivisie</span>
          </StyledLink>
        </LeagueItemStyle>
        <LeagueItemStyle>
          <StyledLink to="/laliga">
            <img src={Champions} alt="Champions" />
            <span>LaLiga</span>
          </StyledLink>
        </LeagueItemStyle>
        <LeagueItemStyle>
          <StyledLink to="/champions">
            <img src={Champions} alt="Champions" />
            <span>Champions League</span>
          </StyledLink>
        </LeagueItemStyle>
        <LeagueItemStyle>
          <StyledLink to="/europa">
            <img src={Champions} alt="Champions" />
            <span>Europa League</span>
          </StyledLink>
        </LeagueItemStyle>
      </MajorLeaguesStyle>
    </MajorDivStyle>
  );
};

export default SidebarMajor;
