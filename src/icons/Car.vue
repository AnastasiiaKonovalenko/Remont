<template>
    <div class="car">
        <Vector />
        <img src="../assets/images/car.webp" alt="icon-car">
    </div>
</template>

<script>
import Vector from "@/icons/Vector";
export default {
    name: "car",
    components: {
        Vector
    }
}
</script>

<style scoped lang="scss">
    .car {
        width: 77px;
        height: 74px;
        position: relative;

        & img {
            height: 35px;
            width: 50px;
            position: absolute;
            top: calc(50% - 17px);
            left: calc(50% - 25px);
        }
    }
</style>
