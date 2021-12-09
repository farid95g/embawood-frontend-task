import React, { useEffect } from "react";
import { getBooks } from "./store/actions/books";
import { useDispatch, useSelector } from "react-redux";
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

  const getCurrentPage = (CurrentPage) => {
    dispatch(getBooks(query, CurrentPage));
  }

  useEffect(() => {
    dispatch(getBooks(query, page));
  }, [page]);

  return (
    <div className="App">
      <Header />
      <Homepage
        books={books}
        total={total}
        booksPerPage={booksPerPage}
        page={page}
        getCurrentPage={getCurrentPage} />
    </div>
  );
}

export default App;
