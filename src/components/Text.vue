<template>
  <component :is="computedTag" :for="htmlFor" :class="computedClass">
    {{ value }}
  </component>
</template>
<script>
export default {
  name: "CustomText",
  props: {
    value: {
      type: String,
      default: "",
    },
    customClass: {
      type: String,
      default: "",
    },
    variant: {
      type: String,
      default: "p",
      validator: (value) =>
        ["h1", "h2", "h3", "h4", "h5", "p", "p2", "p3"].includes(value),
    },
    weight: {
      type: [String, Number],
      default: null,
      validator: (value) =>
        [300, 400, 500, 600, 700, 800, 900].includes(Number(value)),
    },
    tag: {
      type: String,
      default: null,
    },
    htmlFor: {
      type: String,
      default: "",
    },
  },
  computed: {
    computedTag() {
      return this.tag || (this.variant.startsWith("p") ? "p" : this.variant);
    },
    computedClass() {
      return [
        "text-base",
        `text-variant-${this.variant}`,
        `text-weight-${this.weight}`,
        this.className,
      ]
        .join(" ")
        .trim();
    },
  },
};
</script>

<style scoped>
/* Base text styles */
.text-base {
  line-height: 1.5;
}

/* Variants */
.text-variant-h1 {
  font-weight: 800;
  font-size: 2.25rem;
  line-height: 3rem;
}

.text-variant-h2 {
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.text-variant-h3 {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-variant-h4 {
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-variant-h5 {
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-variant-p {
  font-size: 1rem;
}

.text-variant-p2 {
  font-size: 0.875rem;
}

.text-variant-p3 {
  font-size: 0.75rem;
}

/* Weights */
.text-weight-300 {
  font-weight: 300;
}

.text-weight-400 {
  font-weight: 400;
}

.text-weight-500 {
  font-weight: 500;
}

.text-weight-600 {
  font-weight: 600;
}

.text-weight-700 {
  font-weight: 700;
}

.text-weight-800 {
  font-weight: 800;
}

.text-weight-900 {
  font-weight: 900;
}
</style>
