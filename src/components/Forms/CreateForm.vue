<template>
  <form class="form-container" @submit="handleAddBook">
    <div class="form-items">
      <div class="form-item book__name">
        <div class="label-wrapper">
          <label>Name:</label>
        </div>
        <input
          type="text"
          name="name"
          required
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
          required
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
          required
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
          required
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
          required
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
          required
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
          required
          v-model="link"
          placeholder="Write here..."
        />
      </div>

      <div class="form-button">
        <button type="submit">Add book</button>
      </div>
    </div>
  </form>
</template>

<script>
import "@/assets/styles/form.css";
import { mapActions, mapMutations } from "vuex";
import { categories } from "@/assets/data/books";

export default {
  name: "CreateForm",

  data() {
    return {
      image: "",
      name: "",
      numOfPages: "",
      author: "",
      publishDate: "",
      preface: "",
      link: "",
      category: "",
      categories: [],
    };
  },
  methods: {
    ...mapActions(["addBook"]),
    ...mapMutations(["setBookMsg"]),

    resetForm() {
      this.image = "";
      this.name = "";
      this.numOfPages = "";
      this.author = "";
      this.publishDate = "";
      this.preface = "";
      this.link = "";
      this.category = "";
    },

    async handleAddBook(e) {
      e.preventDefault();
      const bookData = {
        image: this.image,
        name: this.name,
        numOfPages: Number(this.numOfPages),
        author: this.author,
        category: this.category,
        publishDate: this.publishDate,
        preface: this.preface,
        link: this.preface,
      };
      const message = await this.addBook(bookData);
      if (message && message.message) return this.resetForm();
      // else {
      //   this.setErrorMessage();
      // }
    },
  },

  created() {
    this.categories = categories;
  },
};
</script>

<style scoped></style>
