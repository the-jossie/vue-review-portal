<template>
  <component v-if="to" :is="'router-link'" :to="to" :class="buttonClasses">
    <CustomText :value="text" />
  </component>
  <button
    v-else
    :class="buttonClasses"
    :disabled="isButtonDisabled"
    v-bind="otherProps"
  >
    <slot name="prefixIcon" />
    <CustomText :value="buttonText" />
    <slot name="suffixIcon" />
  </button>
</template>

<script>
import CustomText from "@/components/Text";

export default {
  components: {
    CustomText,
  },
  name: "CustomButton",
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: "primary",
      validator: (value) =>
        ["primary", "secondary", "tertiary"].includes(value),
    },
    size: {
      type: String,
      default: "medium",
      validator: (value) =>
        ["xsmall", "small", "medium", "large"].includes(value),
    },
    shape: {
      type: String,
      default: "square",
      validator: (value) => ["round", "square"].includes(value),
    },
    customClass: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    otherProps: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    buttonClasses() {
      return [
        "button-base",
        `button-variant-${this.variant}`,
        `button-size-${this.size}`,
        this.shapeClass,
        this.customClass,
      ];
    },
    shapeClass() {
      return this.shape === "round"
        ? "button-shape-round"
        : "button-shape-square";
    },
    isButtonDisabled() {
      return this.disabled || this.isLoading;
    },
    buttonText() {
      return this.isLoading ? "..." : this.text;
    },
  },
};
</script>

<style scoped>
/* Base Styles */
.button-base {
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  transition: all 0.3s;
  cursor: pointer;
}

/* Variants */
.button-variant-primary {
  background-color: black;
  color: white;
  border: 1px solid black;
}

.button-variant-primary:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}

.button-variant-secondary {
  background-color: white;
  color: black;
  border: 1px solid black;
}

.button-variant-tertiary {
  background-color: black;
  color: white;
  border: 1px solid black;
}

/* Sizes */
.button-size-xsmall {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}

.button-size-small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.button-size-medium {
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
}

.button-size-large {
  padding: 0.8rem 4rem;
  font-size: 1.25rem;
}

/* Shapes */
.button-shape-round {
  border-radius: 9999px;
}

.button-shape-square {
  border-radius: 0.25rem;
}
</style>
