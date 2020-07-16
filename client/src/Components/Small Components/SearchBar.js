import React, { useState } from "react";
import styled from "styled-components";
import { searchObject } from "../../objects/searchObject";
import useOnClickOutside from "../../customHooks/useOnClickOutside";
import "../../objects/animation.css";

const ContainerDivStyle = styled.div`
  display: flex;
  visibility: hidden !important;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  top: 0;
  background-color: #192c38;
  border-radius: 4px;
  padding: 5px;
  & input {
    color: rgba(255, 255, 255, 0.7);
    padding: 5px 5px;
    justify-content: flex-end;
    background-color: #213743;
    border-radius: 3px;
    width: 100%;
    min-width: 170px;
    border-color: transparent;
    outline: none;
  }
`;

const SearchDivStyle = styled.div`
  display: flex;
  visibility: visible !important;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  width: 60%;
  background-color: #192c38;
  border-radius: 4px;
  padding: 5px;
  justify-content: center;
  & input {
    color: rgba(255, 255, 255, 0.7);
    padding: 5px 5px;
    justify-content: flex-end;
    background-color: #213743;
    border-radius: 3px;
    width: 100%;
    min-width: 170px;
    border-color: transparent;
    outline: none;
  }
`;

const ListDivStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 7px 0px 7px;
  width: 100%;
  & li {
    list-style: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    margin: 2px 0px;
  }
`;

const SearchBar = () => {
  const [keyword, setkeyword] = useState("");
  const [isOpen, setisOpen] = useState(null);

  // Input keyword search handler
  const keywordChange = (e) => {
    setkeyword(e.target.value);
  };

  // Ref to the search input and container
  const ref = React.useRef();

  // Search filter on the Search Object
  const searchResult = [];
  searchObject
    .filter((each) => each.toLowerCase().includes(keyword))
    .map((filteredName) => searchResult.push(filteredName));

  // Custom hook to fire when clicked outside/inside
  useOnClickOutside(ref, () => setisOpen(false));

  // Animation trigger
  const triggerAnimation = () => {
    setisOpen(true);
  };

  // ClassName Animation Logic
  let animationClassName;
  if (isOpen === null) {
    animationClassName = "";
  } else if (isOpen === true) {
    animationClassName = "searchenlarge";
  } else {
    animationClassName = "searchreduce";
  }

  return (
    <ContainerDivStyle>
      <input type="text" onChange={keywordChange} placeholder="Search..." />
      <SearchDivStyle
        ref={ref}
        onClick={triggerAnimation}
        className={animationClassName}
      >
        <input
          type="text"
          onChange={keywordChange}
          value={keyword}
          placeholder="Search..."
          ref={ref}
        />
        {keyword.length > 0 && isOpen && (
          <ListDivStyle>
            {searchResult.map((each, i) => (
              <li key={i}>{each}</li>
            ))}
          </ListDivStyle>
        )}
      </SearchDivStyle>
    </ContainerDivStyle>
  );
};

export default SearchBar;
