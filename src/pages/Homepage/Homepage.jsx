import React from 'react';
import { Books } from './../../components/Books/Books';
import { CustomPagination } from "./../../components/Pagination/Pagination";

export const Homepage = ({
  books,
  total,
  booksPerPage,
  page,
  query,
  getCurrentPage,
  setCount
}) => {
  return (
    <div>
      {<Books books={books} setCount={setCount} />}

      <CustomPagination
        total={total}
        booksPerPage={booksPerPage}
        page={page}
        query={query}
        getCurrentPage={getCurrentPage}
      />
    </div>
  )
}