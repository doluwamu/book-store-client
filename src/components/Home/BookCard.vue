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
      <router-link
        class="view-link"
        :to="{ name: 'bookDetails', params: { id: book.id } }"
        >View book details</router-link
      >
    </div>
  </div>
</template>
<script>
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
  font-weight: 600;
}

.book-author {
  margin: 0 0 4px;
  padding: 6px 2px;
  font-size: 14px;
  color: green;
  font-weight: 700;
}

.view-link {
  font-size: 13px;
  color: blue;
  text-decoration: none;
}
</style>
