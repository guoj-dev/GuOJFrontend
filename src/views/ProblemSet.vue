<template>
    <v-container class="pb-0">
        <v-sheet :dark="BreadCrumbs.Dark" :light="!BreadCrumbs.Dark" :color="BreadCrumbs.Color" class="d-inline-flex">
            <v-breadcrumbs class="px-4 py-2" :items="items"></v-breadcrumbs>
        </v-sheet>
        <v-card
            :dark="Theme.Dark"
            :light="!Theme.Dark"
            elevation="12"
            :color="Theme.Color"
            class="pa-3 pt-6 px-6 rounded-b-0 animated fadeIn"
            fill-height
            style="border-top-left-radius:4em;border-top-right-radius:4em;margin-top:48px;animation-delay:0.5s;"
        >
            <div class="d-flex grow flex-wrap mb-2">
                <v-sheet
                    class="text-start v-card--material__heading mb-n6 pa-7 animated fadeInUp"
                    dark
                    width="auto"
                    max-height="120"
                    elevation="12"
                    color="success"
                    style="top:-60px;"
                >
                    <v-icon size="64">mdi-calendar</v-icon>
                </v-sheet>
                <span class="display-2 px-6 py-2 animated fadeInLeft">题库</span>
                <div class="flex-grow-1"></div>
                <div class="mr-4">
                    <v-text-field
                        label="搜索"
                        prepend-inner-icon="mdi-magnify"
                        outlined
                    ></v-text-field>
                </div>
            </div>

            <v-divider class="animated fadeInUp"/>
            <v-list :color="Theme.Color" :shaped="true" :subheader="false" tile class="mt-4">
                <v-list-item
                    v-for="key in Problems"
                    :key="key[0]"
                    link
                    :to="'/Problem/' + key[0]"
                >
                    <v-list-item-action class="me-2">
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="title align-center">
                            {{ key[0] }}
                            {{ key[1] }}
                        </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-chip :color="key[3][0]" :dark="Theme.Problem.Tags.Dark" :outlined="Theme.Problem.Tags.Outlined">
                            {{ key[3][1] }}
                        </v-chip>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
            <v-container>
                <div class="text-center">
                    <v-pagination
                        v-model="page"
                        :length="4"
                        light
                        circle
                    ></v-pagination>
                </div>
            </v-container>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ProblemSet extends Vue {
    Problems = [
        [
            'P1000',
            'A+B Problem',
            'light-blue accent-4',
            ['green', '入门难度'],
        ],
        [
            'P1001',
            'A+B Problem',
            'light-blue accent-4',
            ['green', '入门难度'],
        ],
        [
            'P1002',
            'A+B Problem',
            'light-blue accent-4',
            ['green', '入门难度'],
        ],
        [
            'P1003',
            'A+B Problem',
            'light-blue accent-4',
            ['green', '入门难度'],
        ],
        [
            'P1005',
            'A+B Problem',
            'light-blue accent-4',
            ['green', '入门难度'],
        ],
        [
            'P1006',
            'A+B Problem',
            'light-blue accent-4',
            ['green', '入门难度'],
        ],
        [
            'P1007',
            'A+B Problem',
            'light-blue accent-4',
            ['green', '入门难度'],
        ],
        [
            'P1008',
            'A+B Problem',
            'light-blue accent-4',
            ['green', '入门难度'],
        ],
        [
            'P1009',
            'A+B Problem',
            'light-blue accent-4',
            ['green', '入门难度'],
        ],
        [
            'P1010',
            'A+B Problem',
            'light-blue accent-4',
            ['green', '入门难度'],
        ],
        
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

    get Theme() {
        return this.$store.getters['Theme/ProblemSet'];
    }

    get BreadCrumbs() {
        return this.$store.getters['Theme/BreadCrumbs'];
    }
}
</script>

<style lang="sass" scope>
.v-card--material
    &__avatar
        position: relative
        top: -64px
        margin-bottom: -32px
    &__heading
        position: relative
        top: -60px
        transition: .3s ease
        z-index: 1
</style>
