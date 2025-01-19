<template>
  <label v-if="text" :for="htmlFor" :class="labelClasses">
    {{ text }}
    <span v-if="required" class="required-marker">*</span>
  </label>
</template>

<script>
export default {
  name: "CustomLabel",
  props: {
    text: {
      type: String,
      required: true,
    },
    htmlFor: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    labelClasses() {
      return ["label-base"];
    },
  },
};
</script>

<style scoped>
.label-base {
  display: block;
  margin-bottom: 0.25rem;
  font-size: 0.875rem; /* Adjust as needed */
  color: #333; /* Adjust as needed */
}

.required-marker {
  margin-left: 0.25rem;
  color: red;
  font-weight: bold;
}
</style>
