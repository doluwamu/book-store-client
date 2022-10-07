<template>
  <div class="msg-alert" v-if="bookMsg && bookMsg.message">
    <Alert :type="bookMsg.type" :message="bookMsg.message" />
  </div>

  <div class="msg-alert" v-if="errorMessage">
    <Alert :type="errorMessage.type" :message="errorMessage.message" />
  </div>

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

        <a
          :href="book && book.link && book.link"
          class="get-book-link info"
          target="_blank"
          rel="noopener noreferrer"
          >Get Book</a
        >

        <div class="action-buttons">
          <button class="btn edit">Edit Book</button>
          <button @click="removeBook" class="btn delete">Delete Book</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapGetters, mapActions, mapMutations } from "vuex";
import Alert from "@/components/General/Alert.vue";

export default {
  name: "BookDetails",
  computed: { ...mapGetters(["book", "bookMsg", "errorMessage"]) },
  components: { Alert },
  methods: {
    ...mapActions(["getBook", "deleteBook"]),
    ...mapMutations(["clearBooks"]),

    async removeBook() {
      const confirmDelete = confirm("Do you want to delete this book?");

      if (confirmDelete) {
        const message = await this.deleteBook(this.bookId);
        if (message && message.message) return window.location.replace("/");
      }
    },
  },
  data() {
    return {
      publishDate: "",
      moment,
      bookId: "",
    };
  },
  async created() {
    this.clearBooks();
    this.bookId = this.$route.params.id;
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
  transition: 0.3s;
}

.get-book-link:hover {
  background-color: rgb(1, 54, 54);
}

.other-info {
  margin: 30px auto 10px;
}

.action-buttons {
  margin: 20px 0 5px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

.action-buttons .btn {
  padding: 10px;
  font-size: 17px;
  color: #fff;
  border-radius: 7px;
  cursor: pointer;
  transition: 0.3s;
}

.btn.delete {
  background-color: red;
}

.btn.edit {
  background-color: green;
}

.btn.delete:hover {
  background-color: rgb(146, 2, 2);
}

.btn.edit:hover {
  background-color: rgb(2, 80, 2);
}
</style>
