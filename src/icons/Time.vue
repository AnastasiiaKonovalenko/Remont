<template>
    <div class="time">
        <Vector />
        <img src="../assets/images/time.png" alt="icon-time">
    </div>
</template>

<script>
import Vector from "@/icons/Vector";
export default {
    name: "Time",
    components: {
        Vector
    }
}
</script>

<style scoped lang="scss">
.time {
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