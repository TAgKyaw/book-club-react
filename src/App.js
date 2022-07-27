import React, { useState, useEffect } from "react";
import BooksContainer from "./BooksContainer";
import { GlobalStyle } from "./Styles";
import Header from "./Header";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  console.log("this message is going to load everytime the component renders");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://book-club-json.herokuapp.com/books"
        );
        console.log(`here's what our fetch request returns`, response);

        if (response.status === 200) {
          const books = await response.json();
          console.log(`our json object`, books);
          setBooks(books);
        }
      } catch (errors) {
        console.log(`The errors`, errors);
      }

      // async allows us to not hand-code promise chains ().then().then()
    };
    fetchData();
  }, []);

  const pickBook = (book) => {
    setSelectedBook(book);
  };
  console.log(selectedBook);

  // console.log(`the books array in our state: `, books);
  return (
    <>
      <GlobalStyle />
      <Header />
      <BooksContainer books={books} pickBook={pickBook} />
    </>
  );
};

export default App;
