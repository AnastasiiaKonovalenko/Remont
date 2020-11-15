<template>
    <div class="hand">
        <Vector />
        <img src="../assets/images/hand.png" alt="icon-hand">
    </div>
</template>

<script>
import Vector from "@/icons/Vector";
export default {
    name: "hand",
    components: {
        Vector
    }
}
</script>

<style scoped lang="scss">
.hand {
    width: 77px;
    height: 74px;
    position: relative;

    & img {
        height: 40px;
        width: 40px;
        position: absolute;
        top: calc(50% - 20px);
        left: calc(50% - 20px);
    }
}
</style>