import { booksService } from './../../services/books.service';
import { BOOKS_ACTIONS } from '../../utils/books.constants';

export const getBooks = (query, page) => dispatch => {
  booksService
    .getAllBooks(query, page)
    .then(data => {
      dispatch({ type: BOOKS_ACTIONS.GET_BOOKS, payload: data.books });
      dispatch({ type: BOOKS_ACTIONS.SET_TOTAL_BOOKS, payload: data.total });
      dispatch({ type: BOOKS_ACTIONS.SET_BOOKS_PER_PAGE, payload: data.books.length });
      dispatch({ type: BOOKS_ACTIONS.GET_CURRENT_PAGE, payload: data.page });
    });
}