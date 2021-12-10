import React from "react";
import { BookCard } from "./BookCard";
import { LocalStorageServices } from "../../services/localstorage.service";
import styles from "./Books.module.css";

export const Books = ({ books, setCount }) => {
  const addToCart = book => {
    if(LocalStorageServices.get("books")) {
      const previousBooks = JSON.parse(localStorage.getItem("books"));
      if(!previousBooks.find(el => el.isbn13 === book.isbn13)) {
        LocalStorageServices.set("books", [ ...previousBooks, { ...book, count: 1 } ]);
      } else {
        previousBooks.find(el => el.isbn13 === book.isbn13).count++;
        LocalStorageServices.set("books", [ ...previousBooks ]);
      }
    } else {
      LocalStorageServices.set("books", [ { ...book, count: 1 } ]);
    }
    setCount(LocalStorageServices.get("books").length);
  }

  return (
    <div className={styles.booksWrapper}>
      {books.map((book) => (
        <BookCard
          image={book.image}
          title={book.title}
          subtitle={book.subtitle}
          url={book.url}
          key={book.isbn13}
          addToCart={() => addToCart(book)}
        />
      ))}
    </div>
  );
};
