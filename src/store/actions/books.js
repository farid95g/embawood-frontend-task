import { booksService } from './../../services/books.service';
import { BOOKS_ACTIONS } from '../../utils/books.constants';

export const getBooks = (query, page) => dispatch => {
  booksService
    .getAllBooks(query, page)
    .then(data => {
      dispatch({ type: BOOKS_ACTIONS.GET_BOOKS, payload: data.books });
      dispatch({ type: BOOKS_ACTIONS.SET_TOTAL_BOOKS, payload: data.total });
      dispatch({ type: BOOKS_ACTIONS.GET_CURRENT_PAGE, payload: data.page });
    });
}

export const getNextBooks = (query, page) => dispatch => {
  booksService
    .getNextPage(query, page)
    .then(data => {
      dispatch({ type: BOOKS_ACTIONS.GET_BOOKS, payload: data.books });
      dispatch({ type: BOOKS_ACTIONS.GET_CURRENT_PAGE, payload: data.page });
      dispatch({ type: BOOKS_ACTIONS.SET_TOTAL_BOOKS, payload: data.total });
      dispatch({ type: BOOKS_ACTIONS.SET_QUERY, payload: query });
    });
}

export const searchBooks = (query) => dispatch => {
  booksService
    .searchBooks(query)
    .then(data => {
      dispatch({ type: BOOKS_ACTIONS.SET_QUERY, payload: query });
      dispatch({ type: BOOKS_ACTIONS.GET_BOOKS, payload: data.books });
      dispatch({ type: BOOKS_ACTIONS.SET_TOTAL_BOOKS, payload: data.total });
      dispatch({ type: BOOKS_ACTIONS.GET_CURRENT_PAGE, payload: data.page });
    });
}