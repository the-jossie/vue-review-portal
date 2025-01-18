<template>
  <div class="auth-layout">
    <img
      :src="require(`@/assets/auth-layout-image.png`)"
      alt="auth layout image"
    />
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.auth-layout {
  display: flex;
  padding: 60px 0;
  max-width: 1440px;
  margin: 0 auto;

  img {
    width: 50%;
    object-fit: cover;
    height: 80vh;
    border-radius: 32px;
  }
}
</style>
