
<script>
export default {
    props: {
        item: Object
    }
}
</script>

<template>
    <div>
        <h3>titolo: {{ item.title }}</h3>
        <p>Titolo originale: {{ item.original_title }}</p>
        <p>Lingua originale: {{ item.orinal_language }}</p>
        <p>Voto: {{ item.vote_average }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>