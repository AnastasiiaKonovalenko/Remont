<template>
    <v-app class="root">
        <v-main>
            <div id="app">
                <First />
            </div>
        </v-main>
    </v-app>
</template>

<script>
import First from "@/components/First";
export default {
  name: 'App',
  components: {
      First
  }
}
</script>

<style lang="scss">
    @import "./styles/fonts.css";

    body, h1, h2, h3, h4, h5, h6, p, ul, li {
        margin: 0;
        padding: 0;
    }
</style>
