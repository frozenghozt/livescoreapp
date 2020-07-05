import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteFavMatch } from "../../Redux/Actions";
import styled from "styled-components";
import { device } from "../../objects/devices";
import MdStar from "react-ionicons/lib/MdStar";

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
  text-align: center;
  padding: 4px 6px;
  border-radius: 3px;
  color: #fff;
  background-color: rgba(25, 44, 56, 0.55);
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
      <TimerStyle>{time.slice(11, -4)}</TimerStyle>
      <TeamOne>{hometeam}</TeamOne>
      <ResultStyle>
        {homescore} - {awayscore}
      </ResultStyle>
      <TeamTwo>{awayteam}</TeamTwo>
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
