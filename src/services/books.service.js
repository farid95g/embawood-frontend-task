import axios from "axios";
import { BASE_URL } from './config';

export const booksService = {
  getAllBooks(query, page) {
    return axios.get(`${BASE_URL}/search/${query}/${page}`)
      .then(response => response.data);
  },
  getNextPage(query, page) {
    return axios.get(`${BASE_URL}/search/${query}/${page}`)
      .then(response => response.data);
  },
  searchBooks(query) {
    return axios.get(`${BASE_URL}/search/${query}`)
      .then(response => response.data);
  }
}