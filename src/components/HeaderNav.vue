<template>
  <nav>
    <h1>{{ appName }}</h1>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import config from "@/configs/app";

export default {
  data() {
    return {
      appName: config.APP_NAME,
    };
  },
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e9e9e9;
  padding: 4px 40px;

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;

    li {
      margin: 0 10px;

      a {
        text-decoration: none;
      }
    }
  }
}
</style>
