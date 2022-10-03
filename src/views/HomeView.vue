<template>
  <div class="home">
    <div class="home-titles">
      <h3 class="home-title">Welcome To Book Store</h3>
      <p class="home-subtitle">Thousands of books at your finger tips</p>
    </div>

    <div class="books-container">
      <div v-for="book in books" :key="book.id">
        <BookCard :book="book" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import books from "@/assets/data/books";
import BookCard from "@/components/Home/BookCard.vue";
import "@/assets/styles/home-view.css";

export default {
  name: "HomeView",
  components: { BookCard },
  data() {
    return {
      books: [],
    };
  },
  created() {
    this.books = books;
  },
};
</script>
