import styled from "styled-components";
import { ReactComponent as SearchIcon } from "./assets/search.svg";
import React, { useRef, useState } from "react";
import { Pill, Close } from "./Styles";

const SearchContainer = styled(Pill)`
  width: ${({ $showOnDesktop }) => ($showOnDesktop ? "420px" : "20px")};
  transition: 300ms;

  @media (max-width: 800px) {
    width: 85%;
  }
  input,
  button {
    display: ${({ $showOnDesktop }) => ($showOnDesktop ? "block" : "none")};
  }

  @media (max-width: 800px) {
    display: block;
  }
`;

const Input = styled.input`
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
  flex-grow: 1;
  background: inherit;
  border: none;
  padding: 6px;
`;

const Icon = styled(SearchIcon)`
  width: 20px;
  cursor: pointer;
`;

const Wrapper = styled.div`
  @media (max-width: 800px) {
    background: #ffbccc;
    border-top: 2px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 64px;
    left: 0;
    bottom: 0;
    position: fixed;
    z-index: 1;
  }
`;

const Search = ({ filterBooks }) => {
  const inputEl = useRef(null);
  const [showOnDesktop, setShowOnDesktop] = useState(false);

  const handleChange = (event) => {
    filterBooks(event.target.value);
  };

  const clearSearch = () => {
    filterBooks("");
    inputEl.current.value = "";
    setShowOnDesktop(false);
  };

  const showSearch = () => {
    setShowOnDesktop(true);
  };
  return (
    <Wrapper>
      <SearchContainer $showOnDesktop={showOnDesktop}>
        <Icon onClick={showSearch} />
        <Input
          ref={inputEl}
          type="text"
          name="search"
          autoComplete="off"
          onChange={handleChange}
        />
        <Close onClick={clearSearch} />
      </SearchContainer>
    </Wrapper>
  );
};

export default Search;
