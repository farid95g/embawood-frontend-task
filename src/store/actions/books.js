import { booksService } from './../../services/books.service';
import { BOOKS_ACTIONS } from '../../utils/books.constants';

export const getBooks = () => dispatch => {
  booksService
    .getAllBooks()
    .then(data => {
      dispatch({ type: BOOKS_ACTIONS.GET_BOOKS, payload: data.books });
    });
}