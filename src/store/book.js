import { axiosInstance } from "./axios.instance";

const state = {
  books: [],
  book: {
    image: "",
    name: "",
    numOfPages: 0,
    author: "",
    publishDate: "",
    preface: "",
    link: "",
  },
  addBookMsg: { message: "" },
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
