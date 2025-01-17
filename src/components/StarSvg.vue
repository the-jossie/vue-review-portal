<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    :fill="fill"
    v-bind="svgProps"
  >
    <path
      d="m9.5 0 2.133 5.873h6.902l-5.584 3.63 2.133 5.874-5.584-3.63-5.584 3.63 2.133-5.874-5.584-3.63h6.902L9.5 0Z"
    />
  </svg>
</template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: "none",
    },
    width: {
      type: String,
      default: "1rem",
    },
    height: {
      type: String,
      default: "1rem",
    },
  },
  computed: {
    svgProps() {
      return {
        fill: this.fill,
        width: this.width,
        height: this.height,
      };
    },
  },
};
</script>
