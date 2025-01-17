<template>
  <button @click="$emit('click')">
    <div class="container">
      <img v-if="image" :src="image" :alt="name" class="image" />
      <div v-else class="image" />
      <div class="details">
        <div class="contact">
          <h2>{{ name }}</h2>
          <p>{{ address }}</p>
          <p>{{ city }}</p>
        </div>

        <div class="contact">
          <p>{{ email }}, {{ phone }}</p>

          <StarRating :count="ratings" />
        </div>
      </div>
    </div>
  </button>
</template>
<script>
import StarRating from "@/components/StarRating.vue";

export default {
  components: { StarRating },
  props: {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
button {
  background-color: transparent;
  border: none;
  cursor: pointer;

  .container {
    border: 1px solid gray;
    width: 100%;
    border-radius: 20px;
    display: flex;
    height: 200px;
    padding: 0px !important;
    text-align: left;

    .image {
      height: 100%;
      width: 200px;
      border-radius: 20px;
      background-color: gray;
      background-size: cover;
      margin-right: 40px;
    }

    .details {
      margin-right: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 0;

      .contact {
        h2,
        p {
          margin-bottom: 6px;
        }
      }
    }
  }
}
</style>
