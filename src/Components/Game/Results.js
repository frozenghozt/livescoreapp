import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodaysLeagueData } from "../../Redux/Actions";
import { device } from "../../objects/devices";
import FavMatches from "./FavMatches";
import League from "./League";
import ResultsLoader from "./../Small Components/ResultsLoader";
import styled from "styled-components";

const ResultsDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 0px;
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
      {data.count < 1 ? (
        <ResultsLoader
          style={{ width: "100%", height: "100%", margin: "5px 0px" }}
        />
      ) : (
        uniqueLeagues.map((elem) => (
          <League key={elem[1]} name={elem[0]} logo={elem[2]} />
        ))
      )}
    </ResultsDivStyle>
  );
};

export default Results;
