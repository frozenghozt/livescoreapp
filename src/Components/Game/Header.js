import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../Assets/Images/logo.png";
import { device } from "../../Objects/devices";
import styled from "styled-components";

const HeaderDivStyle = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #192c38;
  padding: 0 3vw;
  min-height: 60px;
  @media ${device.tablet} {
    padding: 0 5vw;
  }
`;

const LeftDivStyle = styled.div`
  display: flex;
`;

const RightDivStyle = styled.div`
  display: flex;
  & span {
    color: #fff;
    font-weight: 500;
    font-size: 14px;
  }
`;

const UserStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const Header = () => {
  return (
    <HeaderDivStyle>
      <LeftDivStyle>
        <StyledLink to="/">
          <img src={Logo} alt="Logo" />
        </StyledLink>
      </LeftDivStyle>
      <RightDivStyle>
        <UserStyle>
          <span>Vamossff</span>
        </UserStyle>
      </RightDivStyle>
    </HeaderDivStyle>
  );
};

export default Header;
