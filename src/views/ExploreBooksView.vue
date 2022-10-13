<template>
  <div class="explore">
    <div class="explore-titles">
      <div class="explore-title-contents">
        <h1 class="explre-title">Explore Book Store</h1>
        <p class="explre-subtitle">
          There are so many books suited for all kinds of people. Explore, find
          and download the books you most love for absolutely no cost at all.
        </p>
      </div>
    </div>

    <div class="top-categories">
      <div class="top-categories-header">
        <h2>Top Categories</h2>
      </div>
      <div class="categories">
        <Splide
          :options="{
            rewind: true,
            height: '100%',
            focus: 'center',
            autoWidth: true,
            autoplay: true,
          }"
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <div class="slider-info">
              <img src="/images/action.avif" alt="Sample 1" />
              <p>Action</p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div class="slider-info">
              <img src="/images/fantacy.avif" alt="Sample 2" />
              <p>Fantacy</p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div class="slider-info">
              <img src="/images/romance.avif" alt="Sample 2" />
              <p>Romance</p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div class="slider-info">
              <img src="/images/crime.avif" alt="Sample 2" />
              <p>Crime</p>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div class="slider-info">
              <img src="/images/horror.avif" alt="Sample 2" />
              <p>Horror</p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>

    <div class="most-read">
      <div class="most-read-title">
        <h3>Popular books</h3>
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
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@/assets/styles/explore.css";

export default {
  name: "HomeView",
  components: { BookCard, Splide, SplideSlide },
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

<style scoped></style>
