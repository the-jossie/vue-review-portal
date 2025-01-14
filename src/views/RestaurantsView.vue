<template>
  <div class="container">
    <div class="filter-wrapper">
      <SearchInput
        :text="searchText"
        @update:text="updateSearchText"
        :handleSearch="performSearch"
        placeholder="Search restaurants..."
        class="search-input"
      />
      <SelectInput
        label="Cuisine"
        :options="['Option 1', 'Option 2', 'Option 3']"
        placeholder="Cuisines"
        v-model="selectedOption"
        :error="formErrors.option"
      />

      <SelectInput
        label="City"
        :options="['Option 1', 'Option 2', 'Option 3']"
        placeholder="Cuisines"
        v-model="selectedOption"
        :error="formErrors.option"
      />
      <CustomButton text="Search" shape="round" />
    </div>
  </div>
</template>
<script>
import CustomButton from "@/components/Button";
import SearchInput from "@/components/SearchInput";
import SelectInput from "@/components/SelectInput";

export default {
  name: "RestaurantsView",
  components: {
    CustomButton,
    SearchInput,
    SelectInput,
  },
  data() {
    return {
      searchText: "",
      selectedOption: "",
      formErrors: {
        option: null,
      },
    };
  },
  methods: {
    updateSearchText(newText) {
      this.searchText = newText;
    },
    performSearch() {
      console.log("Searching for:", this.searchText);
    },
  },
};
</script>
<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 50px 0;

  .filter-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    width: 100%;

    .search-input {
      flex: 1;
      margin-right: 20px;
    }
  }
}
</style>
