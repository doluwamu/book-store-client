<template lang="">
  <div>{{ book.name }}</div>
</template>
<script>
import books from "@/assets/data/books";

export default {
  name: "BookDetails",
  components: {},
  data() {
    return {
      book: {},
    };
  },
  created() {
    this.book = books.find((book) => book.id === Number(this.$route.params.id));
  },
};
</script>
<style lang=""></style>
