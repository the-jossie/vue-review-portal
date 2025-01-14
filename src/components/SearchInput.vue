<template>
  <div :class="`flex-1 ${wrapperStyle}`">
    <Label v-if="label" :text="label" htmlFor="search-input" />

    <div class="input-background">
      <input
        id="search-input"
        class="input-style"
        :placeholder="placeholder"
        :value="text"
        @input="handleChange"
      />
    </div>
  </div>
</template>

<script>
import { debounce } from "lodash";

export default {
  name: "SearchInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "Search...",
    },
    handleSearch: {
      type: Function,
      default: null,
    },
    wrapperStyle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isTouched: false,
    };
  },
  watch: {
    text() {
      if (this.handleSearch && this.isTouched) {
        this.debouncedSearch();
      }
    },
  },
  created() {
    this.debouncedSearch = debounce(() => {
      if (this.handleSearch) this.handleSearch();
    }, 1000);
  },
  methods: {
    handleChange(event) {
      this.$emit("update:text", event.target.value);
      this.isTouched = true;
    },
  },
  beforeDestroy() {
    if (this.debouncedSearch.cancel) {
      this.debouncedSearch.cancel();
    }
  },
};
</script>

<style scoped>
.input-background {
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 9999px;
  padding: 0 16px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
}

.input-background:focus-within {
  border-color: black;
}

.input-style {
  background-color: transparent;
  padding: 12px 0;
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  color: #333;
}

.input-style::placeholder {
  color: #aaa;
  font-size: 14px;
}
</style>
