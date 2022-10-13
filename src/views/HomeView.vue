<template>
  <div class="home">
    <div class="home-titles">
      <div class="title-contents">
        <h3 class="home-title">Welcome To Book Store</h3>
        <p class="home-subtitle">
          Thousands of awesome books at your finger tips
        </p>
      </div>
    </div>

    <div class="most-read">
      <div class="most-read-title">
        <h3>Recommended for you</h3>
        <div class="mr-line line"></div>
      </div>

      <div class="books-container">
        <div v-for="(book, index) in allBooks" :key="index">
          <div v-if="book && book !== null">
            <BookCard :book="book" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BookCard from "@/components/General/BookCard.vue";
import "@/assets/styles/home-view.css";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "HomeView",
  components: { BookCard },
  computed: {
    ...mapGetters(["allBooks"]),
    ...mapMutations(["clearBook", "clearBookMsg"]),
  },
  methods: { ...mapActions(["getBooks"]) },

  async created() {
    await this.getBooks();
    this.clearBook;
    // this.clearAddBookMsg();
  },
};
</script>

<style scoped>
.home-titles {
  background: url("@/assets/bg-img.avif");
  background-color: rgb(50, 50, 50);
  background-blend-mode: multiply;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 550px;
}
</style>
