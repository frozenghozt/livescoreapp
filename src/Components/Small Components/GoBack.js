import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import MdArrowBack from "react-ionicons/lib/MdArrowBack";

const GoBackDivStyle = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
`;

const GoBackStyle = styled.div`
  display: flex;
  cursor: pointer;
  & span {
    color: #fff;
    margin-left: 5px;
    font-size: 14px;
  }
  margin-bottom: 12px;
`;

const GoBack = () => {
  let history = useHistory();
  return (
    <GoBackDivStyle>
      {history.length > 2 ? (
        <GoBackStyle onClick={() => history.goBack()}>
          <MdArrowBack color="#FFF" fontSize="18px" />
          <span>Go Back</span>
        </GoBackStyle>
      ) : null}
    </GoBackDivStyle>
  );
};

export default GoBack;
