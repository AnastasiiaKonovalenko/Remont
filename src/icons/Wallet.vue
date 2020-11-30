<template>
    <div class="wallet">
        <Vector />
        <img src="../assets/images/wallet.webp" alt="icon-money">
    </div>
</template>

<script>
import Vector from "@/icons/Vector";
export default {
    name: "Wallet",
    components: {
        Vector
    }
}
</script>

<style scoped lang="scss">
.wallet {
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
