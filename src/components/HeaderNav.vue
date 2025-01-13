<template>
  <nav>
    <StyledText :value="appName" variant="h3" />
    <ul>
      <li>
        <router-link to="/"><StyledText value="Home" /></router-link>
      </li>
      <li>
        <router-link to="/about"><StyledText value="About" /></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import StyledText from "@/components/StyledText";
import config from "@/configs/app";

export default {
  components: {
    StyledText,
  },
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
  padding: 16px 40px;

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
