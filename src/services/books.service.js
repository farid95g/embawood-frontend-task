import axios from "axios";
import { BASE_URL } from './config';

export const booksService = {
  getAllBooks(query, page) {
    return axios.get(`${BASE_URL}/search/query=${query}&page=${page}`)
      .then(response => response.data);
  }
}