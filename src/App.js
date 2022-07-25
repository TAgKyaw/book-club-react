import React, { useState, useEffect } from "react";
import BooksContainer from "./BooksContainer";

const App = () => {
  const [books, setBooks] = useState([]);

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

  console.log(`the books array in our state: `, books);
  return <BooksContainer books={books} />;
};

export default App;
