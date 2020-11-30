<template>
    <div class="money">
        <Vector />
        <img src="../assets/images/money.webp" alt="icon-money">
    </div>
</template>

<script>
import Vector from "@/icons/Vector";
export default {
    name: "money",
    components: {
        Vector
    }
}
</script>

<style scoped lang="scss">
.money {
    width: 77px;
    height: 74px;
    position: relative;

    & img {
        height: 41px;
        width: 41px;
        position: absolute;
        top: calc(50% - 20px);
        left: calc(50% - 20px);
    }
}
</style>
