import React from "react";
import { Pagination } from "react-bootstrap";

export const CustomPagination = ({
  total,
  booksPerPage,
  page,
  getCurrentPage,
}) => {
  let active = Number(page);
  let items = [];
  let lastPageNumber = Math.ceil(Number(total) / booksPerPage);
  if (isFinite(lastPageNumber)) {
    console.log(lastPageNumber);
    for (let number = 1; number <= lastPageNumber; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => getCurrentPage(number)}
        >
          {number}
        </Pagination.Item>
      );
    }
  }

  return (
    <div className="d-flex justify-content-center mt-3">
      <Pagination>
        <Pagination.First onClick={() => getCurrentPage(1)} />
        <Pagination.Prev onClick={() => getCurrentPage(active - 1)} />
        {items.map((item, index) => {
          console.log(item, index);
          if (index < 2 || index > lastPageNumber - 3) {
            return item;
          } else {
            if (index > active - 2 && index < active + 2) {
              return item;
            } else if (index > active - 3 && index < active + 3) {
              return item;
            } else if (index === active + 3 || index === active - 3) {
              return <Pagination.Ellipsis />;
            }
          }
          return null;
        })}
        <Pagination.Next onClick={() => getCurrentPage(active + 1)} />
        <Pagination.Last onClick={() => getCurrentPage(lastPageNumber)} />
      </Pagination>
    </div>
  );
};
