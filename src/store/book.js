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
};

const getters = {
  allBooks: (state) => state.books,
  book: (state) => state.book,
};

const mutations = {
  setBooks: (state, books) => (state.books = books),
  setBook: (state, book) => (state.book = book),
};

const actions = {
  getBooks: async ({ commit }) => {
    const { data } = await axiosInstance.get("/books");
    commit("setBooks", data);
  },
  getBook: async ({ commit }, bookId) => {
    const { data } = await axiosInstance.get(`/books/${bookId}`);
    commit("setBook", data);
  },
};

const bookModules = {
  state,
  getters,
  mutations,
  actions,
};

export default bookModules;
