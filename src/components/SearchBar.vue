<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    },

}
</script>

<template>
    <div>
        <input type="search" v-model="store.searchKey">
        <button @click="$emit('doTheSearch')">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>

</style>