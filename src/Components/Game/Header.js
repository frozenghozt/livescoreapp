import React, { useState } from "react";
import { Link } from "react-router-dom";
import { device } from "../../objects/devices";
import Logo from "./../../Assets/Images/logo.png";
import MdClose from "react-ionicons/lib/MdClose";
import styled from "styled-components";
import Modal from "react-modal";
import SearchBar from "./../Small Components/SearchBar";

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
  justify-content: flex-start;
  width: 33%;
`;

const CenterDivStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 34%;
`;

const RightDivStyle = styled.div`
  display: flex;
  justify-content: flex-end;
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

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "90vw",
    maxWidth: "560px",
    borderRadius: "5px",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    background: "#1A2C38",
    border: "none",
    padding: "8px",
    zIndex: "999",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(14, 18, 36, 0.7)",
    zIndex: "998",
  },
};

const CloseDivStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const LoginDivStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  & form {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    & span {
      margin: 5px 0px;
    }
    & input {
      color: #fff;
      font-size: 14px;
      background: #0f212e;
      box-shadow: none;
      outline-style: none;
      border-color: transparent;
      border-radius: 3px;
      padding: 3px;
      margin: 6px 0px;
    }
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  Modal.setAppElement("#webapp");

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

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
        <button onClick={openModal}>Login</button>
      </RightDivStyle>
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <CloseDivStyle>
          <MdClose
            style={{ cursor: "pointer" }}
            color="rgba(255, 255, 255, 0.6)"
            fontSize="18px"
            onClick={closeModal}
          />
        </CloseDivStyle>
        <LoginDivStyle>
          <form>
            <span>Email</span>
            <input type="text" />
            <span>Password</span>
            <input type="password" />
          </form>
        </LoginDivStyle>
      </Modal>
    </HeaderDivStyle>
  );
};

export default Header;
