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
        <v-card
            elevation="12"
            class="pa-3 pt-6 px-6 rounded-b-0 animated fadeIn"
            style="border-top-left-radius:4em;border-top-right-radius:4em;margin-top:48px;animation-delay:0.5s;"
        >
            <div class="d-flex grow flex-wrap mb-2">
                <v-sheet
                    class="text-start v-card--material__heading mb-n6 pa-7 animated fadeInUp"
                    dark
                    width="auto"
                    max-height="120"
                    elevation="12"
                    color="primary"
                    style="top:-60px;"
                >
                    <v-icon size="64">mdi-format-list-checks</v-icon>
                </v-sheet>
                <span class="display-2 px-6 py-2 animated fadeInLeft"
                    >评测列表</span
                >
            </div>
            <v-divider class="animated fadeInUp" />
            <v-list :subheader="false" tile class="mt-4" shaped>
                <v-list-item
                    v-for="key in Judges"
                    :key="key[0]"
                    :to="'/JudgeStatus/' + key[0]"
                    link

                >
                <v-list-item-avatar>
                    <v-img src="https://vuetifyjs.com/apple-touch-icon-180x180.png"></v-img>
                </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="title align-center"
                        >Quank123wip</v-list-item-title
                    >
                        <v-list-item-subtitle 
                        >#{{ key[0] }} {{ key[1] }}</v-list-item-subtitle
                    >
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-chip
                            :color="key[2][0]"
                            dark
                            >
                            <span>Accepted
                            </span>
                            </v-chip
                        >
                    </v-list-item-action>
                </v-list-item>
                <div class="text-center">
                    <v-pagination
                        v-model="page"
                        :length="4"
                        light
                        circle
                    ></v-pagination>
                </div>
            </v-list>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class JudgeList extends Vue {
    Judges = [
        ['1', 'A+B Problem', ['green', 'Accepted']],
        ['2', 'A+B Problem', ['green', 'Accepted']],
        ['3', 'A+B Problem', ['green', 'Accepted']],
        ['4', 'A+B Problem', ['green', 'Accepted']],
        ['5', 'A+B Problem', ['green', 'Accepted']],
        ['6', 'A+B Problem', ['green', 'Accepted']],
        ['7', 'A+B Problem', ['green', 'Accepted']],
        ['8', 'A+B Problem', ['green', 'Accepted']],
        ['9', 'A+B Problem', ['green', 'Accepted']],
        ['10', 'A+B Problem', ['green', 'Accepted']],
        ['11', 'A+B Problem', ['green', 'Accepted']],
    ];
    items = [
        {
            text: 'GuOJ',
            disabled: false,
            to: '/',
        },
        {
            text: 'ProblemSet',
            disabled: true,
            to: '/ProblemSet',
        },
    ];
    page = 1;

    get BreadCrumbs() {
        return this.$store.getters['Theme/BreadCrumbs'];
    }
}
</script>

<style>
.mainpage {
    height: 100%;
}
</style>
