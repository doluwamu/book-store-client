import { getErrors } from "@/errors/serverErrors";
import { axiosInstance } from "./axios.instance";

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

const state = {
  books: [],
  book: bookInitState,
  addBookMsg: msgInitState,
  errorMessage: "",
};

const getters = {
  allBooks: (state) => state.books,
  book: (state) => state.book,
  addBookMsg: (state) => state.addBookMsg,
  errorMessage: (state) => state.errorMessage,
};

const mutations = {
  setBooks: (state, books) => (state.books = books),
  setBook: (state, book) => (state.book = book),
  setAddBookMsg: (state, addBookMsg) => (state.addBookMsg = addBookMsg),
  clearBooks: (state) => (state.books = []),
  clearBook: (state) => (state.book = bookInitState),
  clearAddBookMsg: (state) => (state.addBookMsg = msgInitState),
  setErrorMessage: (state, errorMessage) => (state.errorMessage = errorMessage),
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
      const addData = { ...data, type: "success" };
      commit("setAddBookMsg", addData);
      return addData;
    } catch (error) {
      console.log(getErrors(error));
      const data = {
        message: getErrors(error),
        type: "error",
      };
      commit("setAddBookMsg", data);
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
