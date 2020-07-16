import React from "react";
import SidebarHeader from "./SidebarHeader";
import SidebarMajor from "./SidebarMajor";
import SidebarMinor from "./SidebarMinor";
import { device } from "../../objects/devices";
import styled from "styled-components";

const SidebarDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  flex-shrink: 0;
  height: 100vh;
  padding: 0px 25px;
  background-color: #0f212e;
  @media ${device.tablet} {
    display: none;
  }
`;

const SidebarWrapper = () => {
  return (
    <SidebarDivStyle>
      <SidebarHeader />
      <SidebarMajor />
      <SidebarMinor />
    </SidebarDivStyle>
  );
};

export default SidebarWrapper;
