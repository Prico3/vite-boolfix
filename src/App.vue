<script>
import { store } from "./store";
import axios from "axios";
export default {
  data() {
    return {
      store
    }
  },
  created() {
    this.getMovies();
  },
  methods: {
    getMovies() {
      const paramsObj = {
        api_key: this.store.apiKey,
        query: "ciao"
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
</template>

<style lang="scss" >
@use "./styles/general.scss" as *;
</style>
