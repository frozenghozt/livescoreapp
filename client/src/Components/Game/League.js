import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { device } from "../../objects/devices";
import PropTypes from "prop-types";
import styled from "styled-components";
import IosArrowDown from "react-ionicons/lib/IosArrowDown";
import MatchResult from "../Small Components/MatchResult";
import LiveSignal from "./../Small Components/LiveSignal";

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

const BodyDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeaderDivStyle = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  padding: 1px 5px 0px;
  width: 100%;
  margin: 4px 0px 6px;
`;

const LeagueNameStyle = styled.div`
  display: flex;
  align-items: center;
  justify-self: start;
  align-self: center;
  color: #fff;
  font-size: 14px;
  & img {
    height: auto;
    width: 19px;
    margin-right: 6px;
  }
`;

const League = (props) => {
  const [collapse, setCollapse] = useState(() => {
    const fromStorage = sessionStorage.getItem(`${props.name}OpenLocal`);
    return fromStorage == null ? true : JSON.parse(fromStorage);
  });

  const data = useSelector((state) => state.todaysLeagueData);

  useEffect(() => {
    sessionStorage.setItem(`${props.name}OpenLocal`, collapse);
  }, [collapse, props.name]);

  return (
    <LeagueDivStyle>
      <HeaderDivStyle>
        <LeagueNameStyle>
          <img src={props.logo} alt="" />
          <span>{props.name}</span>
          {data.matches.some((each) => {
            return (
              each.competition.name === props.name && each.status === "IN_PLAY"
            );
          }) ? (
            <LiveSignal />
          ) : null}
        </LeagueNameStyle>
        <IosArrowDown
          style={{
            cursor: "pointer",
            justifySelf: "end",
            alignSelf: "center",
          }}
          color="#FFF"
          fontSize="18px"
          onClick={() => setCollapse(!collapse)}
        />
      </HeaderDivStyle>
      {collapse ? (
        <BodyDivStyle>
          {data.matches.map((elem, index) => {
            return elem.competition.name === props.name ? (
              <MatchResult
                key={index}
                id={elem.id}
                time={elem.utcDate}
                status={elem.status}
                hometeam={elem.homeTeam.name}
                awayteam={elem.awayTeam.name}
                winner={elem.score.winner}
                homescore={elem.score.fullTime.homeTeam}
                awayscore={elem.score.fullTime.awayTeam}
              />
            ) : null;
          })}
        </BodyDivStyle>
      ) : null}
    </LeagueDivStyle>
  );
};

League.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
};

export default League;
