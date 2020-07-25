<template>
  <v-container class="pb-0">
    <v-sheet
            :dark="BreadCrumbs.Dark"
            :light="!BreadCrumbs.Dark"
            :color="BreadCrumbs.Color"
            class="d-inline-flex"
        >
            <v-breadcrumbs class="px-4 py-2" :items="items"></v-breadcrumbs>
    </v-sheet>
    <v-container>
        <div class="display-2 py-2 animated fadeInUp">比赛列表</div>
        <v-divider/>
        <v-container class="d-flex">
            <v-card class="pa-3">
                
            </v-card>
        </v-container>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    components: { },
    props: {},
    data: () => {
        return {
            items: [
                {
                    text: 'GuOJ',
                    disabled: false,
                    to: '/',
                },
                {
                    text: 'ContestList',
                    disabled: true,
                    to: '/ContestList',
                },
            ],
        };
    },
    computed: {
        BreadCrumbs() {
            return this.$store.getters['Theme/BreadCrumbs'];
        },
    },
    mounted() {
    }
});
</script>

<style>
</style>
