<template>
    <v-container class="pb-0">
        <v-chip
            label
            style="padding:4px 4px 4px 4px;"
            :small="true"
            color="white"
        >
            <v-breadcrumbs
                style="padding:12px ;"
                light
                :items="items"
            ></v-breadcrumbs>
        </v-chip>
        <v-card
            elevation="12"
            class="pa-3 pt-6 px-6 rounded-b-0 animated fadeIn"
            style="border-top-left-radius:4em;border-top-right-radius:4em;margin-top:48px;animation-delay:0.5s;"
        >
            <div class="d-flex grow flex-wrap mb-2">
                <v-hover v-slot:default="{ hover }">
                    <v-sheet
                        class="text-start v-card--material__heading mb-n6 pa-7 animated fadeInUp"
                        dark
                        width="auto"
                        max-height="120"
                        :elevation="hover ? 12 : 3"
                        color="info"
                        :style="hover ? 'top:-65px;' : 'top:-60px'"
                    >
                        <v-icon size="64">mdi-information-outline</v-icon>
                    </v-sheet>
                </v-hover>
                <span class="display-2 px-6 py-2 animated fadeInLeft"
                    >评测任务 #{{ $route.params.JudgeID
                    }}<v-chip color="green" dark class="font-weight-black"
                        >Accepted</v-chip
                    ></span
                >
            </div>
            <v-divider class="animated fadeInUp" />

            <v-row class="pa-4">
                <v-col cols="8" class="mt-8">
                    <v-tooltip top v-for="i in 10" :key="i" dark>
                        <template v-slot:activator="{ on }">
                            <v-hover v-slot:default="{ hover }">
                                <v-sheet
                                    v-on="on"
                                    :elevation="hover ? 12 : 3"
                                    color="green"
                                    dark
                                    class="test-point animated"
                                    :style="hover ? 'top:-5px;' : 'top:0px;'"
                                >
                                    <div
                                        class="font-weight-black pa-1 text-center"
                                    >
                                        <v-icon large>check</v-icon>
                                        <br />
                                        #{{ i }} <br />Accepted
                                    </div>
                                </v-sheet>
                            </v-hover>
                        </template>
                        <span>
                            Time:0ms
                            <br />Memory:0kb
                        </span>
                    </v-tooltip>
                </v-col>
                <v-col cols="4">
                    <v-hover v-slot:default="{ hover }">
                        <v-card
                            outlined
                            :elevation="hover ? 3 : 0"
                            class="animated"
                            style="transition: .3s ease;"
                        >
                            <v-card-title>
                                评测信息
                            </v-card-title>
                            <v-divider />
                            <v-container>
                                <div class="my-1">
                                    题目:<v-chip
                                        color="green"
                                        dark
                                        small
                                        class="font-weight-black"
                                        >P1000 A+B Problem</v-chip
                                    >
                                    <br />
                                </div>
                                <div class="my-1">
                                    日期:<v-chip
                                        color=""
                                        dark
                                        small
                                        class="font-weight-black"
                                        >1919/08/10 11:45:14</v-chip
                                    >
                                    <br />
                                </div>
                                <div class="my-1">
                                    状态:<v-chip
                                        color="success"
                                        dark
                                        small
                                        class="font-weight-black"
                                        >Accepted</v-chip
                                    >
                                    <br />
                                </div>
                                <div class="my-1">
                                    时间:<v-chip
                                        color="info"
                                        dark
                                        small
                                        class="font-weight-black"
                                        >114ms</v-chip
                                    >
                                    <br />
                                </div>
                                <div class="my-1">
                                    空间:<v-chip
                                        color="info"
                                        dark
                                        small
                                        class="font-weight-black"
                                        >514MB</v-chip
                                    >
                                    <br />
                                </div>
                                <div class="my-1">
                                    奖励:<v-chip
                                        color="yellow darken-2"
                                        dark
                                        small
                                        class="font-weight-black"
                                        >+1 EXP</v-chip
                                    >
                                    <br />
                                </div>
                            </v-container>
                        </v-card>
                    </v-hover>
                </v-col>
            </v-row>
            <v-divider />
            <v-container class="my-4">
                <span class="display-2 animated fadeInLeft">
                    <v-icon style="font-size:3rem;">mdi-code-braces</v-icon>代码
                </span>
                <v-card class="pa-4 mt-4">
                    <code-container language="js">{{Code}}</code-container>
                </v-card>
            </v-container>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import CodeContainer from '../components/CodeContainer.vue';

@Component({
    components: {
        CodeContainer,
    },
})
export default class Login extends Vue {
    items = [
        {
            text: 'GuOJ',
            disabled: false,
            to: { path: '/' },
        },
        {
            text: '评测',
            disabled: false,
            exact: true,
            to: { name: 'JudgeList' },
        },
        {
            text: '任务',
            disabled: true,
        },
    ];
    ProblemID = 'P1000';
    ProblemName = 'A+B Problem';
    TimeLimit = '1000ms';
    Time = '0ms';
    MemoryLimit = '128MB';
    Memory = '10KB';
    Code ='var a = require(\'\')';
}
</script>

<style scoped>
.test-point {
    display: inline-block;
    height: 100px;
    width: 100px;
    margin: 10px 10px 10px 10px;
    position: relative;
    transition: 0.3s ease;
}
</style>
