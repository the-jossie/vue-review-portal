<template>
  <div :class="className">
    <Label v-if="label" :text="label" :htmlFor="name" />

    <div class="input-container">
      <select
        :id="name"
        class="input-style"
        :value="value"
        @change="handleChange"
        :placeholder="placeholder"
        v-bind="otherProps"
      >
        <option value="">{{ placeholder }}</option>
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>

    <ErrorMessage v-if="error" :error="error" />
  </div>
</template>

<script>
export default {
  name: "SelectInput",
  props: {
    className: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    error: {
      type: Object,
      default: null,
    },
    placeholder: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: "",
    },
    otherProps: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    handleChange(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style scoped>
.input-container {
  position: relative;
  max-height: 3.5rem;
  width: 100%;
}

.input-style {
  width: 100%;
  min-width: 177px;
  padding: 10px 25px;
  border-radius: 10px;
  border: 1px solid #ccc;
  transition: all 0.3s ease;
}

.input-style:focus {
  outline: 1px solid #000;
}

.input-style:hover {
  border-color: #666;
}

.input-style.error {
  outline: 1px solid #ff4d4d;
  background-color: #ffe5e5;
}
</style>
