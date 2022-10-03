<template lang="">
  <div class="card">
    <div class="book-img-wrapper">
      <router-link :to="{ name: 'bookDetails', params: { id: book.id } }">
        <img :src="book.image" :alt="book.name" class="book-img" />
      </router-link>
    </div>
    <div class="card-info">
      <p class="book-name">Name: {{ book.name.toUpperCase() }}</p>
      <p class="book-author">Author: {{ book.author.toUpperCase() }}</p>
    </div>
  </div>
</template>
<script>
// import {p} from 'vue-router'

export default {
  name: "BookCard",
  props: {
    book: Object,
  },
};
</script>
<style scoped>
.book-name {
  margin: 0;
  padding: 15px 2px 4px;
  color: red;
}

.book-author {
  margin: 0;
  padding: 6px 2px;
  font-size: 14px;
  color: green;
}
</style>
