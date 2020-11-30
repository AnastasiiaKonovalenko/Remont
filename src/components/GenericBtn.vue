<template>
    <button
        v-ripple="{ class: `${rippleColor}--text` }"
        class="calculator-btn pr-5 pl-5"
        :style="{
           background: `${btnBackground}`
        }"
        @click="toggler"
    >
        <span
            :style="{
                 fontFamily: `${textFontFamily}`,
                 fontSize: `${textFontSize}`,
                 color: `${textColor}`
            }"
        >{{btnHeading}}</span>
    </button>
</template>

<script>
export default {
    name: "GenericBtn",
    props: {
        btnHeading: {
            type: String,
            default: ''
        },
        btnType: {
            type: String,
            default: ''
        },
        rippleColor: {
            type: String,
            default: 'primary'
        },
        btnBackground: {
            type: String,
            default: 'primary'
        },
        textColor: {
            type: String,
            default: '#000'
        },
        textFontFamily: {
            type: String,
            default: '\'Catamaran\', sans-serif'
        },
        textFontSize: {
            type: String,
            default: '24px'
        }
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
        min-width: 490px;
        min-height: 86px;
        box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.18);
        border-radius: 17px;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;

        & span {
            line-height: 37px;
            text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
}

@media screen and (max-width: 1364px) {
    .calculator {
        &-btn {
            min-width: 390px;
            min-height: 56px;
        }
    }
}

@media screen and (max-width: 553px) {
    .calculator {
        &-btn {
            min-width: 250px;
            min-height: 56px;

            & span {
                line-height: 1.25;
                text-align: center;
            }
        }
    }
}
</style>
