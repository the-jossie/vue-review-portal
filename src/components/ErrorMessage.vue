<template>
  <div role="alert" class="flex items-center mt-1">
    <CustomText
      :value="error.message"
      variant="p3"
      class="text-left ml-1 text-red-200"
    />
  </div>
</template>

<script>
import CustomText from "@/components/Text";

export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  components: {
    CustomText,
  },
};
</script>

<style scoped></style>
