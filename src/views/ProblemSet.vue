<template>
    <v-container>
        <v-card
            :dark="Theme.Dark"
            :light="!Theme.Dark"
            elevation="12"
            :color="Theme.Color"
            transition="slide-y-reverse-transition"
        >
            <v-card-title>
                <span class="display-1">题库</span>
            </v-card-title>
            <v-divider />
            <v-list :color="Theme.Color" shaped="true" subheader="false" tile>
                <v-list-item v-for="key in Problems" :key="key" link :to="'/Problem/' + key[0]">
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
                        <v-chip :color="key[3][0]">
                            {{key[3][1]}}
                        </v-chip>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
            <div class="text-center">
                <v-pagination
                    v-model="page"
                    :length="4"
                    light
                    circle
                ></v-pagination>
            </div>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    components: {},
    data: () => {
        return {
            Problems: [
                [
                    "P1000",
                    "A+B Problem",
                    "light-blue accent-4",
                    ["green", "入门难度"],
                ],
                [
                    "P1001",
                    "A+B Problem",
                    "light-blue accent-4",
                    ["green", "入门难度"],
                ],
                [
                    "P1002",
                    "A+B Problem",
                    "light-blue accent-4",
                    ["green", "入门难度"],
                ],
                [
                    "P1003",
                    "A+B Problem",
                    "light-blue accent-4",
                    ["green", "入门难度"],
                ],
                [
                    "P1005",
                    "A+B Problem",
                    "light-blue accent-4",
                    ["green", "入门难度"],
                ],
                [
                    "P1006",
                    "A+B Problem",
                    "light-blue accent-4",
                    ["green", "入门难度"],
                ],
                [
                    "P1007",
                    "A+B Problem",
                    "light-blue accent-4",
                    ["green", "入门难度"],
                ],
                [
                    "P1008",
                    "A+B Problem",
                    "light-blue accent-4",
                    ["green", "入门难度"],
                ],
                [
                    "P1009",
                    "A+B Problem",
                    "light-blue accent-4",
                    ["green", "入门难度"],
                ],
            ],
            items: [
                {
                    text: "GuOJ",
                    disabled: true,
                    href: "/",
                },
                {
                    text: "ProblemSet",
                    disabled: true,
                    href: "/ProblemSet",
                },
            ],
        };
    },
    computed: {
        Theme() {
            return this.$store.getters["Theme/ProblemSet"];
        },
    },
});
</script>

<style>
.mainpage {
    height: 100%;
}
</style>
