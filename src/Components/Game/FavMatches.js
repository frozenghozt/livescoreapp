import React from "react";
import { connect } from "react-redux";
import FavHeader from "./../Small Components/FavHeader";
import MatchResult from "./../Small Components/MatchResult";
import styled from "styled-components";

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

const HeaderDivStyle = styled.div`
  display: flex;
  padding: 1px 5px 0px;
`;

const BodyDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px 5px;
`;

const FavMatches = (props) => {
  const show = props.showfav.showfavmore;
  return (
    <FavDivStyle>
      <HeaderDivStyle>
        <FavHeader />
      </HeaderDivStyle>
      {show ? (
        <BodyDivStyle>
          <MatchResult />
          <MatchResult />
        </BodyDivStyle>
      ) : null}
    </FavDivStyle>
  );
};

const mapStateToProps = (state) => {
  return {
    showfav: state.showfavmore,
  };
};

export default connect(mapStateToProps)(FavMatches);
