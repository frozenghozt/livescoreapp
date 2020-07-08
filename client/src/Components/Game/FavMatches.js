import React, { useState } from "react";
import { useSelector } from "react-redux";
import FavMatchResult from "../Small Components/FavMatchResult";
import styled from "styled-components";
import MdStar from "react-ionicons/lib/MdStar";
import IosArrowDown from "react-ionicons/lib/IosArrowDown";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./../../objects/animation.css";

const FavDivStyle = styled.div`
  display: flex;
  width: 100%;
  margin: 5px 0px;
  flex-direction: column;
  padding: 5px 10px;
  background-color: #213743;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
`;

const BodyDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeaderDivStyle = styled.div`
  display: grid;
  grid-template-columns: 22px auto 20px;
  width: 100%;
  margin: 4px 0px 6px;
  padding: 1px 5px 0px;
`;

const FavNameStyle = styled.div`
  justify-self: start;
  align-self: center;
  color: #fff;
  font-size: 14px;
`;

const FavMatches = () => {
  const [collapse, setCollapse] = useState(true);
  const matchesAdded = useSelector((state) => state.favMatchReducer);
  return (
    <FavDivStyle>
      <HeaderDivStyle>
        <MdStar
          style={{
            cursor: "pointer",
            justifySelf: "start",
            alignSelf: "center",
            marginBottom: "2px",
          }}
          color="#F4E122"
          fontSize="18px"
        />
        <FavNameStyle>
          <span>Favorite Matches</span>
        </FavNameStyle>
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
          <TransitionGroup>
            {matchesAdded.map((elem, index) => (
              <CSSTransition key={index} timeout={350} classNames="fade">
                <FavMatchResult
                  key={index}
                  id={elem.id}
                  time={elem.time}
                  status={elem.status}
                  hometeam={elem.hometeam}
                  awayteam={elem.awayteam}
                  homescore={elem.homescore}
                  awayscore={elem.awayscore}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </BodyDivStyle>
      ) : null}
    </FavDivStyle>
  );
};

export default FavMatches;
