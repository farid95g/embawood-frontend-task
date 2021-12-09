import { BOOKS_ACTIONS } from './../../utils/books.constants';

const initialState = {
  books: [],
}

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_ACTIONS.GET_BOOKS:
      return {
        ...state,
        books: action.payload
      };
    
    default:
      return state;
  }
}