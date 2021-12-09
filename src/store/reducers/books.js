import { BOOKS_ACTIONS } from "./../../utils/books.constants";

const initialState = {
  books: [],
  query: "",
  page: 1,
  total: 0,
  booksPerPage: 0,
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_ACTIONS.GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };

    case BOOKS_ACTIONS.SET_TOTAL_BOOKS:
      return {
        ...state,
        total: action.payload,
      };

    case BOOKS_ACTIONS.SET_BOOKS_PER_PAGE:
      return {
        ...state,
        booksPerPage: action.payload,
      };

    case BOOKS_ACTIONS.GET_CURRENT_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};
