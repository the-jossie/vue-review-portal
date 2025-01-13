<template>
  <component :is="computedTag" :class="computedClass" v-bind="labelProps">
    <template v-if="value">{{ value }}</template>
    <slot v-else />
  </component>
</template>
<script>
export default {
  name: "StyledText",
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
    textVariantStyle() {
      return {
        h1: "font-weight: 800; font-size: 2.25rem; line-height: 3.75rem;",
        h2: "font-weight: 700; font-size: 1.5rem; line-height: 2rem;",
        h3: "font-weight: 700; font-size: 1.25rem; line-height: 1.75rem;",
        h4: "font-weight: 700; font-size: 1rem; line-height: 1.5rem;",
        h5: "font-weight: 700; font-size: 0.875rem; line-height: 1.25rem;",
        p: "font-size: 0.875rem; line-height: 1.25rem;",
        p2: "font-size: 0.75rem; line-height: 1rem;",
        p3: "font-size: 0.625rem; line-height: 0.875rem;",
      };
    },
    fontWeightStyle() {
      return {
        300: "font-weight: 300;",
        400: "font-weight: 400;",
        500: "font-weight: 500;",
        600: "font-weight: 600;",
        700: "font-weight: 700;",
        800: "font-weight: 800;",
        900: "font-weight: 900;",
      };
    },
    computedClass() {
      return `
        ${this.textVariantStyle[this.variant] || ""}
        ${this.weight ? this.fontWeightStyle[this.weight] : ""}
        ${this.customClass}
      `;
    },
    computedTag() {
      const firstLetterOfVariant = this.variant[0];
      const shouldRenderParagraphTag = firstLetterOfVariant === "p";
      return this.tag || (shouldRenderParagraphTag ? "p" : this.variant);
    },
    labelProps() {
      return this.htmlFor ? { htmlFor: this.htmlFor } : {};
    },
  },
};
</script>
<style scoped></style>
