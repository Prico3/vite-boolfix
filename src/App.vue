<script>
import { store } from "./store";
import axios from "axios";

// APP
import SearchBarVue from "./components/SearchBar.vue";

export default {
  components: {
    SearchBarVue
  },
  data() {
    return {
      store
    }
  },
  methods: {
    search() {
      this.getMovies();
    },
    getMovies() {
      const paramsObj = {
        api_key: this.store.apiKey,
        query: this.store.searchKey,
      }
      axios
        .get(`${this.store.apiURL}/movie`, {
          params: paramsObj
        })
        .then((resp) => console.log(resp))
    }
  },

}
</script>

<template>
  <SearchBarVue @doTheSearch="search" />
</template>

<style lang="scss" >
@use "./styles/general.scss" as *;
</style>
