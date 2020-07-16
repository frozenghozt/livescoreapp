import React from "react";
import styled from "styled-components";
import Modal from "../Small Components/Modal";

const LoginDivStyle = styled.div`
  display: flex;
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

const Login = (props) => {
  const params = new URLSearchParams(props.location.search);

  return (
    params.get("login") && (
      <Modal
        onClose={() => {
          props.history.push(props.location.pathname);
        }}
      >
        <LoginDivStyle>
          <form>
            <span>Email</span>
            <input type="text" />
            <span>Password</span>
            <input type="password" />
          </form>
        </LoginDivStyle>
      </Modal>
    )
  );
};

export default Login;

//     props.history.push(props.location.pathname);
