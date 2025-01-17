<template>
  <ul class="star-rating">
    <li v-for="(_, index) in 5" :key="index">
      <button
        @click="$emit('click', index + 1)"
        :class="canClick ? `cursor: pointer` : `cursor: default`"
      >
        <StarSvg :fill="count - 1 >= index ? `#FE724C` : `#998F8F`" />
      </button>
    </li>
  </ul>
</template>
<script>
import StarSvg from "@/components/StarSvg.vue";

export default {
  components: { StarSvg },
  props: {
    count: {
      type: Number,
      required: true,
    },
    canClick: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<style scoped>
.star-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    background: none;
    border: none;
  }
}
</style>
