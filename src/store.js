import { reactive } from "vue";

export const store = reactive({
    apiURL: "https://api.themoviedb.org/3/search",
    apiKey: "9ca3300e91dd4d9849fc80a8c4084d90",
    searchKey: "",
    loading: false,
    movies: [],
    series: [],
});