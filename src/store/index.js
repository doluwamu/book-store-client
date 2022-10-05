import { createStore } from "vuex";
import bookModules from "./book";

export default createStore({
  modules: { books: bookModules },
});
