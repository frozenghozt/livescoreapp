import React, { useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import MdClose from "react-ionicons/lib/MdClose";
import useOnClickOutside from "../../customHooks/useOnClickOutside";

const ModalWrapperStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ModalBackdropStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: rgba(14, 18, 36, 0.7);
`;

const ModalStyle = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  color: rgb(177, 186, 211);
  background-color: #1a2c38;
  height: 300px;
  border-radius: 7px;
  width: 600px;
  z-index: 101;
  overflow-y: auto;
  padding: 9px;
`;

const CloseDivStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const ContentDivStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Modal = (props) => {
  const ModalRoot = document.getElementById("modal-root");
  const ref = useRef();
  useOnClickOutside(ref, props.onClose);

  return ReactDOM.createPortal(
    <ModalWrapperStyle>
      <ModalBackdropStyle>
        <ModalStyle ref={ref}>
          <CloseDivStyle>
            <MdClose
              style={{ cursor: "pointer" }}
              color="rgba(255, 255, 255, 0.6)"
              fontSize="18px"
              onClick={props.onClose}
            />
          </CloseDivStyle>
          <ContentDivStyle>{props.children}</ContentDivStyle>
        </ModalStyle>
      </ModalBackdropStyle>
    </ModalWrapperStyle>,
    ModalRoot
  );
};

export default Modal;
