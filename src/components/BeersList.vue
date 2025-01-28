<script>

import axios from 'axios';

export default {
    name: 'BeersList',
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/admin/beers',
            beerList: [],
        }
    },
    methods: {
        getBeers() {
            axios.get(this.apiUrl)
                .then((response) => {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
    },
    created() {
        this.getBeers();
    },
}
</script>

<template>

</template>

<style scoped></style>