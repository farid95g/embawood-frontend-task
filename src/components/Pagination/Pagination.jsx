import React from "react";
import { Pagination } from "react-bootstrap";

export const CustomPagination = ({
  total,
  booksPerPage,
  page,
  getCurrentPage
}) => {
  
  let active = Number(page);
  let items = [];
  let lastPageNumber = Math.ceil(Number(total) / booksPerPage);
  if (isFinite(lastPageNumber)) {
    console.log(lastPageNumber)
    for (let number = 1; number <= lastPageNumber; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active} onClick={() => getCurrentPage(number)}>
          {number}
        </Pagination.Item>
      );
    }
  }

  return (
    <div className="d-flex justify-content-center mt-3">
      <Pagination>{items}</Pagination>
    </div>
  );
};
