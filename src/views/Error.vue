<template>
    <v-container>
        <v-card outlined :color="Theme.Color" :dark="Theme.Dark" :light="!Theme.Dark" style="margin:100px;padding:100px;">
            <v-card-title>
                <div style="padding:10px;color:white;font-size:36px;">Error</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <div
                    style="text-align:center;padding:50px;color:white;font-size:72px;"
                >{{$route.params.ErrorMessage}}</div>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    components: {},
    computed:{
        Theme(){
            return this.$store.getters['Theme/Error'];
        }
    },
    data: () => {
        return {};
    }
});
</script>

<style>
</style>