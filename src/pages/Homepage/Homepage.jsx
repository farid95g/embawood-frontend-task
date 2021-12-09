import React from 'react';
import { Books } from './../../components/Books/Books';
import { CustomPagination } from "./../../components/Pagination/Pagination";

export const Homepage = ({
  books,
  total,
  booksPerPage,
  page,
  getCurrentPage
}) => {
  return (
    <div>
      {<Books books={books} />}

      <CustomPagination
        total={total}
        booksPerPage={booksPerPage}
        page={page}
        getCurrentPage={getCurrentPage}
      />
    </div>
  )
}