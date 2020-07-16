import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteFavMatch } from "../../Redux/Actions";
import styled from "styled-components";
import { device } from "../../objects/devices";
import MdStar from "react-ionicons/lib/MdStar";
import { shortener } from "./../../objects/shortener";

const EachLeagueStyle = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 60px 1fr 60px;
  width: 100%;
  border-radius: 3px;
  margin: 1px 0px;
  padding: 2px 5px;
  &:hover {
    background-color: rgba(25, 44, 56, 0.55);
  }
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
  font-weight: 500;
  background-color: rgba(25, 44, 56, 0.4);
  min-width: 40px;
  padding: 3px 3px;
  border-radius: 3px;
  color: #fff;
  font-size: 13px;
`;

const TeamOne = styled.span`
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  justify-self: end;
  align-self: center;
`;

const TeamTwo = styled.span`
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  justify-self: start;
  align-self: center;
`;

const FavMatchResult = ({
  id,
  time,
  hometeam,
  awayteam,
  status,
  winner,
  homescore,
  awayscore,
}) => {
  const dispatch = useDispatch();
  return (
    <EachLeagueStyle>
      <TimerStyle>
        {status === "SCHEDULED" ? time.slice(11, -4) : status}
      </TimerStyle>
      <TeamOne
        style={{
          fontWeight:
            winner === "HOME_TEAM" && status === "FINISHED" ? "500" : "",
        }}
      >
        {shortener(hometeam)}
      </TeamOne>
      <ResultStyle style={{ color: status === "IN_PLAY" ? "red" : null }}>
        {homescore} - {awayscore}
      </ResultStyle>
      <TeamTwo
        style={{
          fontWeight:
            winner === "AWAY_TEAM" && status === "FINISHED" ? "500" : "",
        }}
      >
        {shortener(awayteam)}
      </TeamTwo>
      <MdStar
        style={{
          cursor: "pointer",
          justifySelf: "end",
          alignSelf: "center",
        }}
        color="#F4E122"
        fontSize="18px"
        onClick={() => {
          dispatch(
            deleteFavMatch({
              time,
              id,
              hometeam,
              awayteam,
              status,
              winner,
              homescore,
              awayscore,
            })
          );
        }}
      />
    </EachLeagueStyle>
  );
};

FavMatchResult.propTypes = {
  id: PropTypes.number,
  time: PropTypes.string,
  hometeam: PropTypes.string,
  status: PropTypes.string,
  awayteam: PropTypes.string,
  winner: PropTypes.string,
  homescore: PropTypes.number,
  awayscore: PropTypes.number,
};

export default FavMatchResult;
