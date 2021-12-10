import React, { useEffect } from "react";
import { getBooks, getNextBooks, searchBooks } from "./store/actions/books";
import { useDispatch, useSelector } from "react-redux";
import { BOOKS_ACTIONS } from "./utils/books.constants";
import { Header } from "./components/Header/Header";
import { Homepage } from "./pages/Homepage/Homepage";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const query = useSelector((state) => state.query);
  const page = useSelector((state) => state.page);
  const total = useSelector((state) => state.total);
  const booksPerPage = useSelector((state) => state.booksPerPage);

  const getCurrentPage = (query, currentPage) => {
    dispatch(getNextBooks(query, currentPage));
  }

  const searchByQuery = (query) => {
    dispatch(searchBooks(query));
  }

  useEffect(() => {
    dispatch(getBooks(query, page));
  }, [page]);

  return (
    <div className="App">
      <Header 
        query={query}
        searchBooks={searchByQuery}
       />

      <Homepage
        books={books}
        total={total}
        booksPerPage={booksPerPage}
        page={page}
        query={query}
        getCurrentPage={getCurrentPage} />
    </div>
  );
}

export default App;
