import React, { useState } from "react";
import styled from "styled-components";

const SearchDivStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  & input {
    color: rgba(255, 255, 255, 0.7);
    padding: 5px 5px;
    justify-content: flex-end;
    background-color: #213743;
    border-radius: 3px;
    width: 50%;
    min-width: 170px;
    outline-style: none;
    border-color: transparent;
    & :hover {
      box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
    }
  }
`;

const SearchBar = () => {
  const [keyword, setkeyword] = useState("Search...");

  const keywordChange = (e) => {
    setkeyword(e.target.value);
  };

  return (
    <SearchDivStyle>
      <input type="text" onChange={keywordChange} placeholder="Search..." />
    </SearchDivStyle>
  );
};

export default SearchBar;
