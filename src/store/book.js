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

const msgInitState = { id: "", message: "" };

const state = {
  books: [],
  book: bookInitState,
  addBookMsg: msgInitState,
};

const getters = {
  allBooks: (state) => state.books,
  book: (state) => state.book,
  addBookMsg: (state) => state.addBookMsg,
};

const mutations = {
  setBooks: (state, books) => (state.books = books),
  setBook: (state, book) => (state.book = book),
  setAddBookMsg: (state, addBookMsg) => (state.addBookMsg = addBookMsg),
  clearBooks: (state) => (state.books = []),
  clearBook: (state) => (state.book = bookInitState),
  clearAddBookMsg: (state) => (state.addBookMsg = msgInitState),
};

const actions = {
  getBooks: async ({ commit }) => {
    try {
      const { data } = await axiosInstance.get("/books");
      commit("setBooks", data);
    } catch (error) {
      debugger;
    }
  },
  getBook: async ({ commit }, bookId) => {
    try {
      const { data } = await axiosInstance.get(`/books/${bookId}`);
      commit("setBook", data);
    } catch (error) {
      debugger;
    }
  },
  addBook: async ({ commit }, bookData) => {
    try {
      const { data } = await axiosInstance.post("/books/", bookData);
      commit("setAddBookMsg", data);
      return data;
    } catch (error) {
      debugger;
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
