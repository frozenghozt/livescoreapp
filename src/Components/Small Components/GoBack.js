import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import MdArrowBack from "react-ionicons/lib/MdArrowBack";

const GoBackDivStyle = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  margin-bottom: 15px;
  & span {
    color: #fff;
    margin-left: 5px;
    font-size: 14px;
  }
`;

const GoBack = () => {
  let history = useHistory();
  return (
    <GoBackDivStyle onClick={() => history.go(-1)}>
      <MdArrowBack color="#FFF" fontSize="18px" />
      <span>Go Back</span>
    </GoBackDivStyle>
  );
};

export default GoBack;
