<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/add-book">Add Book</router-link> |
    <router-link to="/explore">Explore</router-link>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  max-width: 1440px;
  margin: 0 auto;
}

.home,
.book-details,
.create-book {
  min-height: 73vh;
}

nav {
  padding: 20px;
  background-color: rgb(8, 7, 7);
  box-shadow: 0 0 10px 0.4px rgb(70, 70, 70);
  position: sticky;
  top: 0;
  z-index: 1111;
}

nav a {
  font-weight: bold;
  color: #bbb;
}

nav a.router-link-exact-active {
  color: #fff;
}
</style>
