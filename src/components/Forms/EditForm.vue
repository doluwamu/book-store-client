<template>
  <form class="form-container" @submit="handleEditBook">
    <div class="form-items">
      <div class="form-item book__name">
        <div class="label-wrapper">
          <label>Name:</label>
        </div>
        <input
          type="text"
          name="name"
          v-model="name"
          placeholder="Write here..."
        />
      </div>

      <div class="form-item book__image">
        <div class="label-wrapper">
          <label>Image:</label>
        </div>
        <input
          type="text"
          name="image"
          v-model="image"
          placeholder="Write here..."
        />
      </div>

      <div class="form-item book__author">
        <div class="label-wrapper">
          <label>Author:</label>
        </div>
        <input
          type="text"
          name="author"
          v-model="author"
          placeholder="Write here..."
        />
      </div>

      <div class="form-item book__publish__date">
        <div class="label-wrapper">
          <label>Publish date:</label>
        </div>
        <input
          type="date"
          name="publish-date"
          v-model="publishDate"
          placeholder="Write here..."
        />
      </div>

      <div class="form-item book__num__of__pages">
        <div class="label-wrapper">
          <label>Number of pages:</label>
        </div>
        <input
          type="number"
          name="num-of-pages"
          v-model="numOfPages"
          placeholder="Write here..."
        />
      </div>

      <div class="form-item book__category">
        <div class="label-wrapper">
          <label>Category:</label>
        </div>

        <select name="categories" class="categories" v-model="category">
          <option value="">Select...</option>
          <option v-for="(category, index) in categories" :key="index">
            {{ category }}
          </option>
        </select>
      </div>

      <div class="form-item book__preface">
        <div class="label-wrapper">
          <label>Preface:</label>
        </div>
        <textarea
          name="preface"
          v-model="preface"
          placeholder="Write here..."
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <div class="form-item book__link">
        <div class="label-wrapper">
          <label>Link:</label>
        </div>
        <input
          type="text"
          name="link"
          v-model="link"
          placeholder="Write here..."
        />
      </div>

      <div class="form-button">
        <button type="submit">Update Book</button>
      </div>
    </div>
  </form>
</template>

<script>
import "@/assets/styles/form.css";
import { mapActions, mapGetters } from "vuex";
import { categories } from "@/assets/data/books";
import moment from "moment";

export default {
  name: "EditForm",

  computed: { ...mapGetters(["book"]) },

  data() {
    return {
      id: "",
      image: "",
      name: "",
      numOfPages: "",
      author: "",
      publishDate: "",
      preface: "",
      link: "",
      category: "",
      categories: [],
      bookData: null,
    };
  },

  methods: {
    ...mapActions(["getBook", "editBook"]),

    async handleEditBook(e) {
      e.preventDefault();
      const bookData = {
        id: this.id,
        image: this.image,
        name: this.name,
        numOfPages:
          this.numOfPages && this.numOfPages > 0 ? Number(this.numOfPages) : "",
        author: this.author,
        category: this.category,
        publishDate: this.publishDate,
        preface: this.preface,
        link: this.link,
      };
      await this.editBook(bookData);
    },
  },

  async created() {
    this.categories = categories;
    await this.getBook(this.$route.params.id);
    this.id = this.$route.params.id;
    this.image = this.book.image;
    this.name = this.book.name;
    this.numOfPages = this.book.numOfPages;
    this.author = this.book.author;
    this.publishDate = moment(this.book.publishDate).format("yyyy-MM-DD");
    this.preface = this.book.preface;
    this.link = this.book.link;
    this.category = this.book.category;
  },
};
</script>

<style scoped></style>
