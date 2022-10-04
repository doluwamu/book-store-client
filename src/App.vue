<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/add-book">Add Book</router-link>
  </nav>
  <router-view />
  <Footer />
</template>

<script>
import Footer from "@/components/General/Footer.vue";

export default {
  name: "App",
  components: { Footer },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.home,
.book-details,
.create-book {
  min-height: 73vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
