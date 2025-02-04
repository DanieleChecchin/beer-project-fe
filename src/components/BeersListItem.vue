<script>
export default {
    name: "BeersListItem",
    data() {
        return {

        }
    },
    props: {
        beerObj: {
            type: Object,
            required: true,
        },
    },
}
</script>

<template>

    <div class="card col-5 m-3 border-0">

        <div class="card-body mb-3">

            <img :src="`http://127.0.0.1:8000/storage/${beerObj.img}`" class="card-img-top mb-3" alt="...">

            <h5 class="card-title px-3 text-center "> Name: {{ beerObj.name }} </h5>

            <p class="card-text px-3 mt-2 text-center"> Description: {{ beerObj.description }} </p>

            <p class="card-text px-3 text-center"> Type: {{ beerObj.type }} </p>

            <p class="card-text px-3 text-center"> Price: {{ beerObj.price }} € </p>

            <p class="card-text px-3 text-center"> Alcohol Content: {{ beerObj.alcohol_content }} %</p>

            <p class="card-text px-3 text-center"> Capacity: {{ beerObj.capacity }} ml </p>


        </div>

    </div>

</template>

<style scoped lang="scss"></style>