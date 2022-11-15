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
        <section>

            <div>
                <h2>Movies</h2>
                <AppCardVue v-for="item in store.movies" :key="item.id" :item="item" />
            </div>

        </section>

        <section>

            <div>
                <h2>Serie TV</h2>
                <AppCardVue v-for="item in store.series" :key="item.id" :item="item" />
            </div>

        </section>
    </main>
</template>

<style lang="scss" scoped>

</style>