
<script>
export default {
    props: {
        item: Object
    },
    data() {
        return {
            availableFlags: ['en', 'it']
        }
    },
    computed: {
        getTitle() {
            return this.item.title ? this.item.title : this.item.name;
        },
        getOriginalTitle() {
            return this.item.original_title ? this.item.original_title : this.item.original_name;
        },
        getStars() {
            return Math.ceil(this.item.vote_average / 2);
        }
    },
    methods: {
        imgUrl(imgName) {
            return new URL(`../assets/img/${imgName}.png`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div>
        <div>
            <img v-if="item.poster_path" :src="`http://image.tmdb.org/t/p/w342/${item.poster_path}`" alt="">
            <img v-else src="../assets/img/no-img.webp" alt="">
        </div>
        <h3>Titolo: {{ getTitle }}</h3>
        <p>Titolo originale: {{ getOriginalTitle }}</p>
        <div class="language">
            <img v-if="availableFlags.includes(item.original_language)" :src="imgUrl(item.original_language)" alt="">
            <p>Lingua originale: {{ item.original_language }}</p>
        </div>
        <div>
            <p>Voto: {{ getStars }}</p>
            <i v-for="n in 5" :key="n" :class="n <= getStars ? 'fa-solid' : 'fa-regular'" class="fa-star"></i>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.language {
    img {
        width: 40px;
    }
}
</style>