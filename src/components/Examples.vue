<template>
    <div style="position: relative">
        <div id="grid" class="grid">
            <div v-for="i in 12" :key="i">
                <img @click="setImgLink(i)" class="grid-img" :src="require(`../assets/images/${i}.jpg`)" alt="">
            </div>
        </div>
        <transition name="fade">
            <div class="big-img" v-if="link">
                <img style="object-fit: cover; height: 100%" :src="require(`../assets/images/${link}.jpg`)" alt="">
                <button
                    @click="clearImgLink"
                    class="close-btn"
                >
                    Закрыть
                </button>

                <img @click="slideToLeft" :class="{disabled: +link === 1}" class="left arrow" src="../assets/images/pngwing.com.png" alt="">
                <img @click="slideToRight" :class="{disabled: +link === 12}" class="right arrow" src="../assets/images/pngwing.com.png" alt="">
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "Examples",
    data() {
        return {
            link: '',
        }
    },
    methods: {
        setImgLink(num) {
            this.link = num;
        },
        clearImgLink() {
            this.link = '';
        },
        slideToLeft() {
            if(+this.link > 1) {
                +this.link--;
            }
        },

        slideToRight() {
            if(+this.link < 12) {
                +this.link++;
            }
        }
    }
}
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
}
#grid {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1vw;
    padding: 1vw;
    margin: 60px 0;
    position: relative;
    z-index: 1;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .4;
        z-index: -1;
        background: url("../assets/images/12.jpg") no-repeat;
        background-size: cover;
    }
}
#grid > div {
    height: 264px;
}

.grid {
    &-img {
        height: 264px;
        width: 221px;
        object-fit: cover;
        -webkit-box-shadow: 0 0 14px 5px rgba(0,0,0,0.51);
        -moz-box-shadow: 0 0 14px 5px rgba(0,0,0,0.51);
        box-shadow: 0 0 14px 5px rgba(0,0,0,0.51);
        transition:transform 0.25s ease;
    }
}

.big-img {
    top: 5%;
    background-color: white;
    -webkit-box-shadow: 0px 0px 29px 10px rgba(0,0,0,0.6);
    -moz-box-shadow: 0px 0px 29px 10px rgba(0,0,0,0.6);
    box-shadow: 0px 0px 29px 10px rgba(0,0,0,0.6);
    z-index: 5;
    padding: 30px;
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 90%;
    width: 100%;
    box-sizing: border-box;
}

.close-btn {
    font-family: 'Catamaran-Regular', sans-serif;
    right: 0;
    bottom: 60px;
    position: absolute;
    height: 60px;
    width: 200px;
    align-self: center;
    margin-top: 40px;
    background: #7096F5;
    color: #FFFFFF;
    outline: none;
    border-radius: 4px;
    border: none;
}

.arrow {
    height: 8vw;
    width: 8vw;
    opacity: 0.4;
    position: absolute;
    top: calc(50% - 4vw);
}

.left {
    transform: scaleX(-1);
    left: 20px;
}

.right {
    right: 20px;
}

.disabled {
    opacity: 0.2;
}

@media screen and (max-width: 1110px){
    #grid > div {
        height: 23.78vw;
    }
    .grid {
        &-img {
            height: 23.78vw;
            width: 19.90vw;
            object-fit: cover;
            -webkit-box-shadow: 0 0 14px 5px rgba(0,0,0,0.51);
            -moz-box-shadow: 0 0 14px 5px rgba(0,0,0,0.51);
            box-shadow: 0 0 14px 5px rgba(0,0,0,0.51);
        }
    }

    .close-btn {
        right: 0;
        bottom: 5.4vw;
        position: absolute;
        height: 5.4vw;
        width: 18vw;
        align-self: center;
        margin-top: 3.6vw;
        font-size: 2.5vw;
    }

    .big-img {
        padding: 2.7vw;
    }
}
</style>