import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import MdStar from "react-ionicons/lib/MdStar";
import IosArrowDown from "react-ionicons/lib/IosArrowDown";

const HeaderDivStyle = styled.div`
  display: grid;
  grid-template-columns: 22px auto 20px;
  width: 100%;
  margin: 4px 0px 6px;
`;

const FavNameStyle = styled.div`
  justify-self: start;
  align-self: center;
  color: #fff;
  font-size: 14px;
`;

const FavHeader = ({ dispatch }) => {
  return (
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
        onClick={() => dispatch({ type: "SET_SHOW_FAV_MORE" })}
      />
    </HeaderDivStyle>
  );
};

export default connect()(FavHeader);
