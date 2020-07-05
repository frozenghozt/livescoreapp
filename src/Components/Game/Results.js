import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodaysLeagueData } from "../../Redux/Actions";
import { device } from "../../objects/devices";
import FavMatches from "./FavMatches";
import League from "./League";
import styled from "styled-components";

const ResultsDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 2vw;
  align-items: center;
  position: relative;
  @media ${device.mobileL} {
    padding: 10px 2vw;
  }
`;

const Results = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodaysLeagueData());
  }, [dispatch]);

  const data = useSelector((state) => state.todaysLeagueData);

  const ids = data.matches.map((elem) => {
    return [
      elem.competition.name,
      elem.competition.id,
      elem.competition.area.ensignUrl,
    ];
  });

  const uniqueLeagues = Array.from(
    new Set(ids.map(JSON.stringify)),
    JSON.parse
  );
  return (
    <ResultsDivStyle>
      <FavMatches />
      {data.count > 0 &&
        uniqueLeagues.map((elem) => (
          <League key={elem[1]} name={elem[0]} logo={elem[2]} />
        ))}
    </ResultsDivStyle>
  );
};

export default Results;
