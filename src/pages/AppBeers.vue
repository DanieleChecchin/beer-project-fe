<script>
import BeersList from '../components/BeersList.vue';

export default {
    name: 'AppBeers',
    data() {
        return {

        }
    },
    components: {
        BeersList,
    }
}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center my-5">Le nostre birre</h1>
            </div>
            <BeersList />
        </div>
    </div>

</template>

<style scoped></style>