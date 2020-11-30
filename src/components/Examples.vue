<template>
    <div style="position: relative; width: 100%; display: flex; justify-content: center">
        <div id="grid" class="grid">
            <div class="scrim" v-if="link"></div>
            <div v-for="i in 12" :key="i" class="grid-item">
                <img @click="setImgLink(i)" class="grid-img" :src="require(`../assets/images/${i}.webp`)" alt="">
            </div>
        </div>
        <transition name="fade">
            <div class="big-img" v-if="link" @click="clearImgLink">
                <img class="image" :src="require(`../assets/images/${link}.webp`)" :alt="`image-${link}`">
                <img @click.stop="slideToLeft" :class="{disabled: +link === 1}" class="left arrow" src="../assets/images/pngwing.com.webp" alt="">
                <img @click.stop="slideToRight" :class="{disabled: +link === 12}" class="right arrow" src="../assets/images/pngwing.com.webp" alt="">
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
.scrim {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #fff;
    opacity: 0.85;
}

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
        height: 100%;
        opacity: .4;
        z-index: -1;
        background: url("../assets/images/12.webp") no-repeat;
        background-size: cover;
    }
}
.grid-item {
    height: 264px;
}

.scrim {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #fff;
    opacity: 0.7;
}

.grid {
    &-img {
        height: 264px;
        width: 221px;
        object-fit: cover;
        -webkit-box-shadow: 0 0 14px 5px rgba(0,0,0,0.61);
        -moz-box-shadow: 0 0 14px 5px rgba(0,0,0,0.61);
        box-shadow: 0 0 14px 5px rgba(0,0,0,0.61);
        transition:transform 0.25s ease;
    }
}

.big-img {
    top: 5%;
    z-index: 5;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 90%;
    width: 100%;
    box-sizing: border-box;
}

.close-btn {
    font-family: 'Catamaran', sans-serif;
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
    max-height: 60px;
    max-width: 60px;
    opacity: 0.4;
    position: absolute;
    top: calc(50% - 4vw);
}

.left {
    transform: scaleX(-1);
    left: 10px;
}

.right {
    right: 10px;
}

.disabled {
    opacity: 0.2;
}

.image {
    object-fit: contain;
    max-width: 90%;
    max-height: 90%;
    -webkit-box-shadow: 0 0 29px 10px rgba(0,0,0,0.6);
    -moz-box-shadow: 0 0 29px 10px rgba(0,0,0,0.6);
    box-shadow: 0 0 29px 10px rgba(0,0,0,0.6);
}

@media screen and (max-width: 1110px){
    .grid-item {
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

@media screen and (max-width: 560px){
    .left {
        left: 20px;
    }

    .right {
        right: 20px;
    }
}
</style>
