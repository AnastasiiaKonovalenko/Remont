<template>
    <v-dialog
        v-model="dialog"
        max-width="900"
    >
        <template v-slot:activator="{ on, attrs }">
            <div
                class="mt-8 mb-8"
                v-bind="attrs"
                v-on="on"
            >
                <GenericBtn
                    :btn-heading="'BLACK FRIDAY'"
                    :text-font-family="'\'Asul-Regular\', sans-serif'"
                    :btn-background="'#FF0000'"
                    :text-color="'#000'"
                    :btn-type="'sales'"
                    :ripple-color="'colorWhite'"
                    :text-font-size="textFont(48, 32, 24)"
                />
            </div>
        </template>

        <v-card @click="dialog=false">
            <v-img
                max-width="900"
                src="../assets/banners/photo_2020-11-25_22-41-21.jpg"
            ></v-img>
        </v-card>
    </v-dialog>
</template>

<script>
import GenericBtn from "@/components/GenericBtn";

export default {
    name: "Banner",
    components: {
        GenericBtn
    },
    data() {
        return {
            dialog: false,
        }
    },
    methods: {
        textFont(a, b, c) {
            if (window.innerWidth >= 1450) {
                return `${a}px`
            } else if (window.innerWidth >= 1364 && window.innerWidth < 1450) {
                return `${b}px`
            } else {
                return `${c}px`
            }

        }
    },
}
</script>

<style scoped>
</style>