<template>
    <v-container class="my-6">
        <v-card
            :dark="Theme.Dark"
            :light="!Theme.Dark"
            elevation="12"
            :color="Theme.Color"
            class="pa-3"
            transition="slide-y-reverse-transition"
        >
            <div class="d-flex grow flex-wrap">
                <v-sheet
                    class="text-start v-card--material__heading mb-n6 pa-7"
                    dark
                    width="auto"
                    max-height="90"
                    elevation="6"
                    color="success"
                >
                    <v-icon size="32">mdi-calendar</v-icon>
                </v-sheet>
                <span class="display-1 px-6 py-2">题库</span>
                <div class="flex-grow-1"></div>
                <div>
                    <v-text-field
                        label="搜索"
                        prepend-inner-icon="mdi-magnify"
                        outlined
                    ></v-text-field>
                </div>
            </div>

            <v-divider />
            <v-list :color="Theme.Color" shaped="true" subheader="false" tile>
                <v-list-item
                    v-for="key in Problems"
                    :key="key"
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
import Vue from 'vue';

export default Vue.extend({
    components: {},
    data: () => {
        return {
            Problems: [
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
            ],
            items: [
                {
                    text: 'GuOJ',
                    disabled: true,
                    href: '/',
                },
                {
                    text: 'ProblemSet',
                    disabled: true,
                    href: '/ProblemSet',
                },
            ],
        };
    },
    computed: {
        Theme() {
            return this.$store.getters['Theme/ProblemSet'];
        },
    },
});
</script>

<style lang="sass">
.v-card--material
    &__avatar
        position: relative
        top: -64px
        margin-bottom: -32px
    &__heading
        position: relative
        top: -40px
        transition: .3s ease
        z-index: 1
</style>
