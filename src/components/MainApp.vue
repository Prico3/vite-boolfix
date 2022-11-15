<script>
import { store } from '../store';
import AppCardVue from './AppCard.vue';
export default {
    components: {
        AppCardVue
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>
        <div>
            <AppCardVue v-for="item in store.movies" :key="item.id" :item="item" />
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>