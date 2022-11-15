<script>
import { store } from "./store";
import axios from "axios";

// APP
import SearchBarVue from "./components/SearchBar.vue";
import MainAppVue from "./components/MainApp.vue";

export default {
  components: {
    SearchBarVue,
    MainAppVue
  },
  data() {
    return {
      store
    }
  },
  methods: {
    search() {
      this.getMovies();
      this.getSeries();
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
        .then((resp) => {
          this.store.movies = resp.data.results;
        })
    },
    getSeries() {
      const paramsObj = {
        api_key: this.store.apiKey,
        query: this.store.searchKey,
      }
      axios
        .get(`${this.store.apiURL}/tv`, {
          params: paramsObj
        })
        .then((resp) => {
          this.store.series = resp.data.results;
        })
    }
  },

}
</script>

<template>
  <SearchBarVue @doTheSearch="search" />
  <MainAppVue />
</template>

<style lang="scss" >
@use "./styles/general.scss" as *;
</style>
