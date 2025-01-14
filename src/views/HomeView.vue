<template>
  <div class="container">
    <ul>
      <li v-for="image in images" :key="image">
        <img :src="require(`@/assets/${image}`)" :alt="`image ${index + 1}`" />
      </li>
    </ul>
    <CustomButton text="Explore Restaurants" href="/restaurants" />
  </div>
</template>

<script>
import CustomButton from "@/components/Button";
import configs from "@/configs/app";

export default {
  name: "HomeView",
  components: {
    CustomButton,
  },
  data() {
    return {
      appName: configs.APP_NAME,
      images: [
        "dashboard-image-1.png",
        "dashboard-image-2.png",
        "dashboard-image-3.png",
        "dashboard-image-4.png",
        "dashboard-image-5.png",
        "dashboard-image-6.png",
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  max-width: 1440px;
  margin: 0 auto;

  .title {
    font-size: 50px;
  }

  ul {
    margin: 50px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
}
</style>
