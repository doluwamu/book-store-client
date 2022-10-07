import { getErrors } from "@/errors/serverErrors";
import { axiosInstance } from "./axios.instance";

// Initial states and response/error functions
const bookInitState = {
  image: "",
  name: "",
  author: "",
  category: "",
  numOfPages: 0,
  publishDate: "",
  preface: "",
  link: "",
};

const msgInitState = { id: "", message: "", type: "" };

const booksInitState = [];

const bookActionMsg = (data, type = "success") => {
  return { ...data, type };
};

const bookActionErrorMsg = (error, type = "error") => {
  return {
    message: getErrors(error),
    type,
  };
};

// State management
const state = {
  books: booksInitState,
  book: bookInitState,
  bookMsg: msgInitState,
  errorMessage: msgInitState,
};

const getters = {
  allBooks: (state) => state.books,
  book: (state) => state.book,
  bookMsg: (state) => state.bookMsg,
  errorMessage: (state) => state.errorMessage,
};

const mutations = {
  setBooks: (state, books) => (state.books = books),
  setBook: (state, book) => (state.book = book),
  setBookMsg: (state, bookMsg) => (state.bookMsg = bookMsg),
  setErrorMessage: (state, errorMessage) => (state.errorMessage = errorMessage),
  clearBooks: (state) => (state.books = booksInitState),
  clearBook: (state) => (state.book = bookInitState),
  clearBookMsg: (state) => (state.bookMsg = msgInitState),
  clearErrorMessage: (state) => (state.errorMessage = msgInitState),
};

const actions = {
  getBooks: async ({ commit }) => {
    try {
      const { data } = await axiosInstance.get("/books");
      commit("setBooks", data);
    } catch (error) {
      console.log(getErrors(error));
      commit("setErrorMessage", getErrors(error));
    }
  },

  getBook: async ({ commit }, bookId) => {
    try {
      const { data } = await axiosInstance.get(`/books/${bookId}`);
      commit("setBook", data);
    } catch (error) {
      console.log(getErrors(error));
      commit("setErrorMessage", getErrors(error));
    }
  },

  addBook: async ({ commit }, bookData) => {
    try {
      const { data } = await axiosInstance.post("/books/", bookData);
      commit("setBookMsg", bookActionMsg(data));
      return bookActionMsg(data);
    } catch (error) {
      commit("setErrorMessage", bookActionErrorMsg(error));
    }
  },

  deleteBook: async ({ commit }, bookId) => {
    try {
      const { data } = await axiosInstance.delete(`/books/${bookId}`);
      commit("setBookMsg", bookActionMsg(data));
      return bookActionMsg(data);
    } catch (error) {
      commit("setErrorMessage", bookActionErrorMsg(error));
    }
  },

  editBook: async ({ commit }, bookId, bookData) => {
    try {
      const { data } = await axiosInstance.patch(`/books/${bookId}`, bookData);
      commit("setBookMsg", bookActionMsg(data));
      return bookActionMsg(data);
    } catch (error) {
      console.log(error);
      commit("setErrorMessage", bookActionErrorMsg(error));
    }
  },
};

const bookModules = {
  state,
  getters,
  mutations,
  actions,
};

export default bookModules;
