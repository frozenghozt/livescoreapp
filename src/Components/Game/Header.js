import React from "react";
import { Link } from "react-router-dom";
import { device } from "../../objects/devices";
import Logo from "./../../Assets/Images/logo.png";
import styled from "styled-components";
import SearchBar from "./../Small Components/SearchBar";

const HeaderDivStyle = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #192c38;
  padding: 0 3vw;
  min-height: 55px;
  max-height: 55px;
  @media ${device.tablet} {
    padding: 0 5vw;
  }
`;

const LeftDivStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 33%;
`;

const CenterDivStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 34%;
`;

const RightDivStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 33%;
  & button {
    display: flex;
    font-weight: 500;
    font-size: 14px;
    outline: none;
    box-shadow: none;
    color: #fff;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Header = (props) => {
  return (
    <HeaderDivStyle>
      <LeftDivStyle>
        <StyledLink to="/">
          <img src={Logo} alt="Logo" />
        </StyledLink>
      </LeftDivStyle>
      <CenterDivStyle>
        <SearchBar />
      </CenterDivStyle>
      <RightDivStyle>
        <StyledLink
          to={{ pathname: props.location.pathname, search: "?login=true" }}
        >
          <button>Login</button>
        </StyledLink>
      </RightDivStyle>
    </HeaderDivStyle>
  );
};

export default Header;
