<template>
  <div role="alert" class="error-message">
    <CustomText :value="value" variant="p3" />
  </div>
</template>

<script>
import CustomText from "@/components/Text";

export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  components: {
    CustomText,
  },
};
</script>

<style scoped>
.error-message {
  display: flex;
  align-items: center;
  margin-top: 4px;

  p {
    color: red;
    text-align: left;
    margin-left: 4px;
  }
}
</style>
