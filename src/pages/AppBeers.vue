<script>
import BeersList from '../components/BeersList.vue';

export default {
    name: 'AppBeers',
    data() {
        return {

        }
    },
    components: {
        BeersList
    }
}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1>Lista delle birre</h1>
                <BeersList />
            </div>
        </div>
    </div>

</template>

<style scoped></style>