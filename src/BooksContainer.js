import React from "react";
import styled from "styled-components";
import Book from "./Book";

const Container = styled.div`
  background-color: #a7e1f8;
  padding: 160px 40px;
  overflow: scroll;

  @media (max-width: 800px) {
    padding: 114px 20px;
  }
`;

const H2 = styled.h2`
  font-size: 42px;
  margin: 0 0 10px 0;

  @media (max-width: 800px) {
    font-size: 32px;
  }
`;

const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 120px;
  margin-top: 40px;
  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 60px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
  }
`;

const BooksContainer = ({ books }) => (
  <Container>
    <H2>ALL BOOKS</H2>
    <BookList>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </BookList>
  </Container>
);
export default BooksContainer;
