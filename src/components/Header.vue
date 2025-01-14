<template>
  <div class="container">
    <nav>
      <li>
        <router-link to="/">
          <CustomText :value="appName" variant="h3" />
        </router-link>
      </li>
      <ul>
        <li>
          <router-link to="/"><CustomText value="Home" /></router-link>
        </li>
        <li>
          <router-link to="/restaurants"
            ><CustomText value="Restaurants"
          /></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import CustomText from "@/components/Text";
import config from "@/configs/app";

export default {
  name: "HeaderNav",
  components: {
    CustomText,
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
