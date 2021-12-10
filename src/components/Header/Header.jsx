import React, { useState } from 'react';
import styles from "./Header.module.css";
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

export const Header = ({ searchBooks, count }) => {
  const [title, setTitle] = useState("");

  const handleChange = e => setTitle(e.target.value);

  const SubmitSearch = e => {
    e.preventDefault();
    searchBooks(title);
    setTitle("");
  }

  return (
    <header className={styles.header}>
      <Navbar bg="dark" expand="lg" variant='dark' fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink to="/embawood-frontend-task">Home</NavLink>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/cart">Shopping Cart <span>{count}</span></NavLink>
            </Nav>
            <Form className="d-flex" onSubmit={SubmitSearch}>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={title}
                onChange={handleChange}
              />
              <Button variant="outline-success" onClick={SubmitSearch}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}