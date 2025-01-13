import StyledText from '@/components/Text';
<template>
  <div class="container">
    <StyledText :value="appName" variant="h1" class="title" />
  </div>
</template>

<script>
import StyledText from "@/components/Text";
import configs from "@/configs/app";

export default {
  name: "HomeView",
  components: {
    StyledText,
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
