<template>
  <div class="container">
    <form>
      <SearchInput
        :text="searchText"
        @update:text="updateSearchText"
        :handleSearch="performSearch"
        placeholder="Search restaurants..."
        class="search-input"
      />
      <SelectInput
        :options="['Option 1', 'Option 2', 'Option 3']"
        placeholder="Cuisines"
        v-model="selectedOption"
        :error="formErrors.option"
      />

      <SelectInput
        :options="['Option 1', 'Option 2', 'Option 3']"
        placeholder="City"
        v-model="selectedOption"
        :error="formErrors.option"
      />
      <CustomButton text="Search" customClass="search-button" />
    </form>
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

  form {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    width: 100%;

    > * {
      margin-right: 20px;
    }

    .search-input {
      flex: 1;
    }

    .search-button {
      width: 150px;
    }
  }
}
</style>
