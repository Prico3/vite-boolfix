
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
        <h3>titolo: {{ getTitle }}</h3>
        <p>Titolo originale: {{ getOriginalTitle }}</p>
        <div class="language">
            <img v-if="availableFlags.includes(item.original_language)" :src="imgUrl(item.original_language)" alt="">
            <p>Lingua originale: {{ item.original_language }}</p>
        </div>
        <p>Voto: {{ item.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>
.language {
    img {
        width: 40px;
    }
}
</style>