<template>
  <div class="container">
    <CustomText value="404" :tag="h1" />
    <CustomText value="Page not found" :tag="'p'" :size="'md'" />

    <router-link to="/">
      <CustomButton text="Go to Home" />
    </router-link>
  </div>
</template>
<script>
import CustomText from "@/components/Text";
import CustomButton from "@/components/Button";

export default {
  components: {
    CustomButton,
    CustomText,
  },
};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  gap: 20px;
}
</style>
