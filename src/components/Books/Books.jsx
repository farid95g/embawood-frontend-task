import React from "react";
import { BookCard } from "./BookCard";
import styles from "./Books.module.css";

export const Books = ({ books }) => {
  return (
    <div className={styles.booksWrapper}>
      {books.map((book) => (
        <BookCard
          image={book.image}
          title={book.title}
          subtitle={book.subtitle}
          url={book.url}
          key={book.isbn13}
        />
      ))}
    </div>
  );
};
