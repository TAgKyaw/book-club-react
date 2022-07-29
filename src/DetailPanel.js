import styled from "styled-components";
import Book from "./Book";
import React, { useEffect, useRef } from "react";
import { Pill, Close } from "./Styles";

// Styled-components for DetailPanel
const Panel = styled.article`
  background-color: #ffe581;
  border-left: 2px solid #000;
  height: calc(100vh - 82px);
  width: 660px;
  position: fixed;
  z-index: 2;

  right: ${({ $state }) =>
    $state === "entering" || $state === "entered" ? 0 : "-660px"};

  bottom: 0;
  box-sizing: border-box;
  padding: 40px 120px 60px 40px;
  overflow: scroll;
  transition: 300ms;

  @media (max-width: 800px) {
    border-left: none;
    padding: 40px 86px 20px 20px;
    width: 100vw;
    height: calc(100vh - 75px);
    bottom: ${({ $state }) =>
      $state === "entering" || $state === "entered" ? 0 : "-100vh"};
    right: unset;
    z-index: 3;
  }
`;

const P = styled.p`
  font-family: "Libre Baskerville", serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 30px 0 0;
`;

const Em = styled.em`
  font-style: italic;
`;

const CloseWrapper = styled(Pill)`
  display: ${({ $state }) => ($state === "entered" ? "flex" : "none")};
  cursor: pointer;
  top: 120px;
  right: 40px;
  position: fixed;
  z-index: 4;

  @media (max-width: 800px) {
    top: unset;
    bottom: 20px;
    right: 20px;
  }
`;
const BG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 1;
  opacity: ${({ $state }) =>
    $state === "entering" || $state === "entered" ? 1 : 0};
  pointer-events: ${({ $state }) => ($state === "exited" ? "none" : "auto")};
  transition: 300ms;
`;

// DetailPanel

const DetailPanel = ({ book, closePanel, state }) => {
  const panelEl = useRef(null);
  const prevBook = useRef(null);

  useEffect(() => {
    if (prevBook.current !== book) {
      panelEl.current.scrollTop = 0;
    }

    prevBook.current = book;
  }, [book, prevBook]);

  return (
    <>
      <BG onClick={closePanel} $state={state} />
      <Panel $state={state} ref={panelEl}>
        <CloseWrapper onClick={closePanel} $state={state}>
          <Close />
        </CloseWrapper>
        {book && (
          <>
            <Book book={book} isLarge={true} />
            <P>{book.description} </P>
            <P>
              <Em>Published in {book.published}</Em>
            </P>
          </>
        )}
      </Panel>
    </>
  );
};

export default DetailPanel;
