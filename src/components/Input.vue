<template>
  <div :class="customClass">
    <CustomLabel v-if="!isCheckbox" :text="label" :htmlFor="name" />
    <div class="input-container">
      <!-- Input Element (input, select, or textarea) -->
      <component
        :is="InputElement"
        :type="inputType"
        :value="value"
        :id="name"
        :placeholder="placeholder"
        v-bind="otherProps"
        :class="inputClasses"
        @input="$emit('input', $event.target.value)"
      >
        <slot></slot>
      </component>

      <CustomText
        v-if="isCheckbox"
        :value="label"
        :htmlFor="name"
        tag="label"
        class="ml-2 cursor-pointer"
      />
    </div>
    <ErrorMessage v-if="error" :error="error" />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import CustomLabel from "@/components/Label";
import CustomText from "@/components/Text";
import ErrorMessage from "@/components/ErrorMessage";

export default {
  name: "CustomInput",
  components: { CustomLabel, CustomText, ErrorMessage },
  props: {
    customClass: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    error: {
      type: Object,
      default: null,
    },
    name: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number, Boolean],
      default: "",
    },
    otherProps: {
      type: Object,
      default: () => ({}),
    },
  },
  //   setup(props, { emit }) {
  setup(props) {
    const showPassword = ref(false);

    // Determine input type (text, password, checkbox, etc.)
    const inputType = computed(() =>
      props.type === "password" && showPassword.value ? "text" : props.type
    );

    // Determine the input element (input, textarea, or select)
    const InputElement = computed(() => {
      const type = props.type.toLowerCase().trim();
      if (type === "select") return "select";
      if (type === "textarea") return "textarea";
      return "input";
    });

    // Check if the input type is password or checkbox
    const isPassword = computed(() => props.type === "password");
    const isCheckbox = computed(() => props.type === "checkbox");

    // Dynamic classes for the input element
    const inputClasses = computed(() => {
      return [
        "input-base",
        props.error
          ? "error"
          : `${
              isCheckbox.value
                ? "w-max cursor-pointer"
                : "focus:outline-primary"
            }`,
      ].join(" ");
    });

    return {
      showPassword,
      inputType,
      InputElement,
      isPassword,
      isCheckbox,
      inputClasses,
    };
  },
};
</script>

<style scoped>
/* Base styles for input container */
.input-container {
  position: relative;
  max-height: 3.5rem;
  width: 100%;
}

/* Base styles for input element */
.input-base {
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  outline: 1px solid #ccc;
  transition: all 0.3s;
  border: none;
}
.input-base:hover {
  outline-color: black;
}

.input-base:focus {
  outline-color: #fe734c75;
}

/* Error styles */
.error {
  outline-color: red;
}

/* Checkbox-specific styles */
.w-max {
  width: max-content;
}

.cursor-pointer {
  cursor: pointer;
}

/* Error message */
.input-error {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>
