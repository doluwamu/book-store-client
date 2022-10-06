<template>
  <div class="book-details">
    <div class="detail-container">
      <h1 class="book-name">
        {{ book && book.name && book.name.toUpperCase() }}
      </h1>

      <div class="book-img-wrapper">
        <img
          :src="book && book.image && book.image"
          :alt="book && book.name && book.name"
        />
      </div>

      <div class="other-info">
        <h4 class="author info">
          Written by {{ book && book.author && book.author }} on
          {{ moment(publishDate).format("MMMM Do YYYY") }}
        </h4>

        <div class="preface-section info">
          <h3 class="preface-title title">Preface:</h3>
          <p class="preface-content content">
            {{ book && book.preface && book.preface }}
          </p>
        </div>

        <div class="category-section info">
          <h3 class="category-title title">Category:</h3>
          <p class="category-content content">
            {{ book && book.category && book.category }}
          </p>
        </div>

        <br />

        <a
          :href="book && book.link && book.link"
          class="get-book-link info"
          target="_blank"
          rel="noopener noreferrer"
          >Get Book</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "BookDetails",
  computed: { ...mapGetters(["book"]) },
  methods: {
    ...mapActions(["getBook"]),
    ...mapMutations(["clearBooks"]),
  },
  data() {
    return {
      publishDate: "",
      moment,
    };
  },
  async created() {
    this.clearBooks();
    await this.getBook(this.$route.params.id);
    this.publishDate = new Date(
      this.book && this.book !== null && this.book.publishDate
    );
  },
};
</script>

<style scoped>
.book-details {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
}

.book-name {
  padding: 20px 0;
}

.book-img-wrapper {
  max-width: 700px;
  max-height: 500px;
  margin: 0 auto;
  overflow: hidden;
}

.book-img-wrapper img {
  width: 100%;
  height: 100%;
}

.info {
  margin: 20px auto;
  max-width: 600px;
}

.author {
  font-size: 20px;
}

.title {
  margin-bottom: 0;
}

.content {
  margin-top: 5px;
  line-height: 23px;
}

.get-book-link {
  color: #fff;
  background-color: rgb(2, 86, 86);
  padding: 9px;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
}

.other-info {
  margin: 30px auto 10px;
}
</style>
