
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
    methods: {
        imgUrl(imgName) {
            return new URL(`../assets/img/${imgName}.png`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div>
        <h3>titolo: {{ item.title }}</h3>
        <p>Titolo originale: {{ item.original_title }}</p>
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