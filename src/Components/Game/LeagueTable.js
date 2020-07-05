import React from "react";
import { device } from "./../../objects/devices";
import styled from "styled-components";
import GoBack from "./../Small Components/GoBack";
import TableHeader from "./../Small Components/TableHeader";
import TablePosition from "./../Small Components/TablePosition";

const TableDivContainer = styled.div`
  padding: 15px 2vw;
  align-items: center;
  @media ${device.mobileL} {
    padding: 10px 2vw;
  }
`;

const TableDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 5px 0px;
  width: 100%;
  background-color: #213743;
  color: #fff;
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.1);
`;

const LeagueTable = (props) => {
  console.log(props);
  return (
    <TableDivContainer>
      <GoBack />
      <TableDivStyle>
        <TableHeader />
        <TablePosition />
        <TablePosition />
        <TablePosition />
      </TableDivStyle>
    </TableDivContainer>
  );
};

export default LeagueTable;
