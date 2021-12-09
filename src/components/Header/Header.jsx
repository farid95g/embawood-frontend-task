import React from 'react';
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>Book Store</div>
      <div className={styles.navbar}>
        <ul>
          <li>
            <a href="/">Homepage</a>
          </li>
          <li>
            <a href="/shopping-cart">Shopping Cart</a>
          </li>
        </ul>
      </div>
    </header>
  )
}