import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { booksReducer } from './reducers/books';

export const store = createStore(booksReducer, applyMiddleware(thunk));