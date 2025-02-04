<script>

import axios from 'axios';

import BeersListItem from './BeersListItem.vue';

export default {
    name: 'BeersList',
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/admin/beers',
            beerList: [],
        }
    },
    components: {
        BeersListItem
    },
    methods: {
        getBeers() {
            axios.get(this.apiUrl)
                .then((response) => {
                    // handle success
                    console.log(response.data.result);
                    this.beerList = response.data.result;
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    },
    created() {
        this.getBeers();
    },
}
</script>

<template>
    <BeersListItem v-for="beer in beerList" :key="beer.id" :beerObj="beer" />
</template>

<style lang="scss" scoped></style>