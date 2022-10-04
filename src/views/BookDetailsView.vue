<template lang="">
  <div class="book-details">
    <div class="detail-container">
      <h1 class="book-name">{{ book.name.toUpperCase() }}</h1>

      <div class="book-img-wrapper">
        <img :src="book.image" :alt="book.name" />
      </div>

      <div class="other-info">
        <h4 class="author">
          Written by {{ book.author }} on
          {{ moment(publishDate).format("MMMM Do YYYY") }}
        </h4>
        <div class="preface-section">
          <h3 class="preface-title">Preface:</h3>
          <p class="preface-content">{{ book.preface }}</p>
        </div>
        <br/>
        <a
          :href="book.link"
          class="get-book-link"
          target="_blank"
          rel="noopener noreferrer"
          >Get Book</a
        >
        <br />
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import books from "@/assets/data/books";
import moment from "moment";

export default {
  name: "BookDetails",
  components: {},
  data() {
    return {
      book: {},
      publishDate: "",
      moment,
    };
  },
  created() {
    this.book = books.find((book) => book.id === Number(this.$route.params.id));
    this.publishDate = new Date(this.book.publishDate)
  },
};
</script>

<style scoped>
.book-details {
  max-width: 1200px;
  margin: 0 auto;
}

.book-img-wrapper {
  max-width: 700px;
  max-height: 500px;
  margin: 0 auto;
}

.book-img-wrapper img {
  width: 100%;
  height: 100%;
}

.preface-section {
  max-width: 600px;
  margin: 0 auto;
}

.preface-title {
  margin-bottom: 0;
}

.preface-content {
  margin-top: 10px;
}

.get-book-link {
  color: #fff;
  background-color: rgb(2, 86, 86);
  padding: 9px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
}
</style>
