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

    <div class="restaurants-list">
      <RestaurantCard
        name="KFC"
        address="10 KFC Road, Liverpool Road"
        email="hello@kfc.com"
        phone="01234567890"
        city="Stoke"
        ratings="4.5"
        @click="goToRestaurantDetailsView(1)"
      />
    </div>
  </div>
</template>
<script>
import CustomButton from "@/components/Button";
import SearchInput from "@/components/SearchInput";
import SelectInput from "@/components/SelectInput";
import RestaurantCard from "@/shared/RestaurantCard";

export default {
  name: "RestaurantsView",
  components: {
    CustomButton,
    SearchInput,
    SelectInput,
    RestaurantCard,
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
    goToRestaurantDetailsView(id) {
      this.$router.push({ name: "restaurant-details", params: { id } });
    },
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

  .restaurants-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 20px;
  }
}
</style>
