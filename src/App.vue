<template>
  <div id="app">
    <HeaderNav />
    <router-view />
  </div>
</template>

<script>
import HeaderNav from "@/components/Header.vue";

export default {
  components: {
    HeaderNav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
}

li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
