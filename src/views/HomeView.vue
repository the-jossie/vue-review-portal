import CustomText from '@/components/Text';
<template>
  <div class="container">
    <CustomText :value="appName" variant="h1" class="title" />
    <CustomButton text="Explore Restaurants" />
    <CustomText :value="appName" variant="h1" class="title" />
  </div>
</template>

<script>
import CustomText from "@/components/Text";
import CustomButton from "@/components/Button";
import configs from "@/configs/app";

export default {
  name: "HomeView",
  components: {
    CustomButton,
    CustomText,
  },
  data() {
    return {
      appName: configs.APP_NAME,
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
}
</style>
