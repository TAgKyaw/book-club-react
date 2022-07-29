import React, { useState, useEffect } from "react";
import { Transition } from "react-transition-group";
import BooksContainer from "./BooksContainer";
import { GlobalStyle } from "./Styles";
import Header from "./Header";
import DetailPanel from "./DetailPanel";
import Search from "./Search";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showPanel, setShowPanel] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState([]);
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
          setFilteredBooks(books);
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
    setShowPanel(true);
  };

  const closePanel = () => {
    setShowPanel(false);
  };

  const filterBooks = (searchTerm) => {
    const stringSearch = (bookAttribute, searchTerm) =>
      bookAttribute.toLowerCase().includes(searchTerm.toLowerCase());
    if (!searchTerm) {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(
        books.filter(
          (book) =>
            stringSearch(book.title, searchTerm) ||
            stringSearch(book.author, searchTerm)
        )

        // book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        // book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  };
  // console.log(filterBooks(null));
  // console.log(filterBooks("Octavia"));

  // console.log(selectedBook);
  // console.log(`the books array in our state: `, books);
  const hasFiltered = filteredBooks.length !== books.length;
  return (
    <>
      <GlobalStyle />
      <Header>
        <Search filterBooks={filterBooks} />
      </Header>
      <BooksContainer
        books={filteredBooks}
        pickBook={pickBook}
        isPanelOpen={showPanel}
        title={hasFiltered ? "Search results" : "All books"}
      />
      <Transition in={showPanel} timeout={300}>
        {(state) => (
          <DetailPanel
            book={selectedBook}
            closePanel={closePanel}
            state={state}
          />
        )}
      </Transition>
    </>
  );
};

export default App;
