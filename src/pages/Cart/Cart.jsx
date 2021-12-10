import React, { useState } from "react";
import { Table, ButtonGroup, Button } from "react-bootstrap";
import { LocalStorageServices } from "../../services/localstorage.service";

export const Cart = ({ cart }) => {
  const [currentCart, setCurrentCart] = useState(cart);

  const update = (book, isIncrement) => {
    const currentElement = currentCart.find(el => el.isbn13 === book.isbn13);
    if (isIncrement) {
      currentElement.count++;
      setCurrentCart([
        ...currentCart
      ])
    } else {
      currentElement.count--;
      if(currentElement.count < 1){
        const updatedCart = currentCart.filter(el => el.isbn13 !== currentElement.isbn13);
        setCurrentCart([
          ...updatedCart
        ])
        LocalStorageServices.set("books", updatedCart);
        return;
      }
      setCurrentCart([
        ...currentCart
      ])
    }
    LocalStorageServices.set("books", currentCart);
  }

  return (
    <div className="container my-4">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Image</th>
            <th>title</th>
            <th>Price</th>
            <th>Details</th>
            <th>Count</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {currentCart?.map(c => (
            <tr>
              <td>
                <img src={c.image} width="150px" />
              </td>
              <td>{c.title}</td>
              <td>{c.price}</td>
              <td>
                <a href={c.url} target="_blank">Book details</a>
              </td>
              <td>{c.count}</td>
              <td>
                <ButtonGroup size="lg" className="mb-2">
                  <Button className="mx-2" onClick={() => update(c, true)}>+</Button>
                  <Button className="mx-2" onClick={() => update(c, false)}>-</Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}