import React, { useEffect, useState } from "react";
import { getBooks, getNextBooks, searchBooks } from "./store/actions/books";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "./pages/Cart/Cart";
import { Header } from "./components/Header/Header";
import { Homepage } from "./pages/Homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import { LocalStorageServices } from "./services/localstorage.service";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const query = useSelector((state) => state.query);
  const page = useSelector((state) => state.page);
  const total = useSelector((state) => state.total);
  const booksPerPage = useSelector((state) => state.booksPerPage);
  const cart = LocalStorageServices.get("books");
  const [count, setCount] = useState(cart?.length);

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
        count={count}
      />

      <main>
        <Routes>
          <Route path="/embawood-frontend-task" element={<Homepage
            books={books}
            total={total}
            booksPerPage={booksPerPage}
            page={page}
            query={query}
            getCurrentPage={getCurrentPage}
            setCount={setCount}
           />} />

          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
