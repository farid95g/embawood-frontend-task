import React, { useEffect } from 'react';
import './App.css';
import { getBooks } from './store/actions/books';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="App">
      {books.map(b => <p>{b.title}</p>)}
    </div>
  );
}

export default App;
