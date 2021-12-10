import { BOOKS_ACTIONS } from "./../../utils/books.constants";

const initialState = {
  books: [],
  query: "all",
  page: 1,
  total: 0,
  booksPerPage: 10,
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

    case BOOKS_ACTIONS.GET_CURRENT_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    case BOOKS_ACTIONS.SET_QUERY:
      return {
        ...state,
        query: action.payload
      };

    default:
      return state;
  }
};
