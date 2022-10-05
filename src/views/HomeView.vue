<template>
  <div class="home">
    <div class="home-titles">
      <h3 class="home-title">Welcome To Book Store</h3>
      <p class="home-subtitle">Thousands of books at your finger tips</p>
    </div>

    <div class="books-container">
      <div v-for="(book, index) in allBooks" :key="index">
        <div v-if="book && book !== null">
          <BookCard :book="book" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BookCard from "@/components/Home/BookCard.vue";
import "@/assets/styles/home-view.css";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomeView",
  components: { BookCard },
  computed: { ...mapGetters(["allBooks"]) },
  methods: { ...mapActions(["getBooks"]) },
  data() {
    return {
      books: [],
    };
  },
  async created() {
    await this.getBooks();
  },
};
</script>
