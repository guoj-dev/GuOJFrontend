<template>
    <v-card-text>
        <v-card
            :dark="Theme.Dark"
            :light="!Theme.Dark"
            elevation="12"
            :color="Theme.Color"
            transition="slide-y-reverse-transition"
        >
            <v-card-title>
                <span>题库</span>
            </v-card-title>
            <v-container>
                <v-row v-for="key in Problems" :key="key">
                    <v-col>
                        <v-card
                            :dark="Theme.Problem.Dark"
                            :light="!Theme.Problem.Dark"
                            :color="
                                Theme.Problem.ProblemColor
                                    ? key[2]
                                    : Theme.Problem.Color
                            "
                            elevation="3"
                            :to="'/Problem/' + key[0]"
                        >
                            <v-container style="padding: 0 4px 0 0;">
                                <v-row>
                                    <v-col>
                                        <v-card-title style="padding: 0 0 0 0;">
                                            <v-icon>mdi-chevron-right</v-icon>
                                            {{ key[0] }} {{ key[1] }}
                                        </v-card-title>
                                    </v-col>
                                    <v-col>
                                        <div align="right">
                                            <v-chip
                                                :dark="Theme.Problem.Tags.Dark"
                                                :light="!Theme.Problem.Tags.Dark"
                                                :outlined="Theme.Problem.Tags.Outlined"
                                                :color="key[3][0]"
                                                >{{ key[3][1] }}</v-chip
                                            >
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
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
    </v-card-text>
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

<style>
.mainpage {
    height: 100%;
}
</style>
