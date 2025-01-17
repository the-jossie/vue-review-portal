<template>
  <div class="container">
    <nav>
      <li>
        <router-link to="/">
          <CustomText :value="appName" variant="h3" />
        </router-link>
      </li>
      <ul>
        <li v-for="(route, index) in routes" :key="index">
          <router-link :to="route.path" exact active-class="active-route"
            ><CustomText :value="route.name"
          /></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import CustomText from "@/components/Text";
import config from "@/configs/app";
import pageRoutes from "@/configs/page-routes";

export default {
  name: "HeaderNav",
  components: {
    CustomText,
  },
  data() {
    return {
      appName: config.APP_NAME,
      routes: pageRoutes.data,
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

      .active-route {
        color: #fe724c !important;
      }
    }
  }
}
</style>
