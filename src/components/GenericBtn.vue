<template>
    <button class="calculator-btn" @click="toggler">
        <span>{{btnHeading}}</span>
    </button>
</template>

<script>
export default {
    name: "GenericBtn",
    props: {
        btnHeading: String,
        btnType: String
    },
    methods: {
        toggler() {
            if(this.btnType === 'calculator') {
                this.$emit('form-toggler')
            } else if(this.btnType === 'sales') {
                this.$emit('sales-toggler')
            }
        }
    }
}
</script>

<style scoped lang="scss">
.calculator {

    &-btn {
        width: 490px;
        height: 86px;
        background: #7096F5;
        box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.18);
        border-radius: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        outline: none;

        & span {
            font-family: 'Catamaran-Bold', sans-serif;
            font-size: 24px;
            line-height: 37px;
            color: #FFFFFF;
            text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
}

@media screen and (max-width: 1364px) {
    .calculator {
        &-btn {
            width: 390px;
            height: 56px;

            & span {
                font-size: 18px;
            }
        }
    }
}

@media screen and (max-width: 553px) {
    .calculator {
        height: 600px;

        &-btn {
            width: 250px;
            height: 56px;

            & span {
                font-size: 14px;
                line-height: 1.25;
                text-align: center;
            }
        }
    }
}
</style>