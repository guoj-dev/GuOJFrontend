<template>
    <v-container>
        <v-card outlined :color="Theme.Color" :dark="Theme.Dark" :light="!Theme.Dark" style="margin:100px;padding:100px;">
            <v-card-title>
                <div style="padding:10px;color:white;font-size:36px;">404 Not Found</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-container>
                <div
                    style="text-align:center;padding:50px;color:white;font-size:72px;"
                >🕊呀?页面好像走丢了呢🕊</div>
            </v-container>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class NotFound extends Vue {
    get Theme() {
        return this.$store.getters['Theme/NotFound'];
    }
}
</script>

<style>
</style>
