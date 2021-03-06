import React from "react";
import { Pagination } from "react-bootstrap";

export const CustomPagination = ({
  total,
  booksPerPage,
  page,
  query,
  getCurrentPage,
}) => {
  let active = Number(page);
  let items = [];
  let lastPageNumber = Math.ceil(total / booksPerPage);
  if (isFinite(lastPageNumber)) {
    for (let number = 1; number <= lastPageNumber; number++) {
      items = [
        ...items,
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={() => getCurrentPage(query, number)}
        >
          {number}
        </Pagination.Item>
      ];
    }
  }

  return (
    <div className="d-flex justify-content-center mt-3">
      <Pagination>
        <Pagination.First onClick={() => getCurrentPage(1)} disabled={active === 1} />
        <Pagination.Prev onClick={() => getCurrentPage(active - 1)} disabled={active === 1} />
        {items.map((item, index) => {
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
        <Pagination.Next onClick={() => getCurrentPage(active + 1)} disabled={active === lastPageNumber} />
        <Pagination.Last onClick={() => getCurrentPage(lastPageNumber)} disabled={active === lastPageNumber} />
      </Pagination>
    </div>
  );
};
