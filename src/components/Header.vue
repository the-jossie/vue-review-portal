<template>
  <div class="container">
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
  </div>
</template>

<script>
import StyledText from "@/components/Text";
import config from "@/configs/app";

export default {
  name: "HeaderNav",
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
.container {
  background-color: #000;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 40px;
    color: #fff;
    max-width: 1440px;
    margin: 0 auto;

    ul {
      list-style-type: none;
      padding: 0;
      display: flex;
      align-items: center;

      li {
        margin: 0 10px;
        a {
          text-decoration: none;
          color: #fff;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
