import axios from "axios";

export const booksService = {
  getAllBooks() {
    return axios.get("https://api.itbook.store/1.0/search/query=")
      .then(response => response.data);
  }
}