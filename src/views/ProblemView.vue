<template>
    <v-container>
        <v-sheet :dark="BreadCrumbs.Dark" :light="!BreadCrumbs.Dark" :color="BreadCrumbs.Color" class="d-inline-flex">
            <v-breadcrumbs class="px-4 py-2" :items="items"></v-breadcrumbs>
        </v-sheet>
        <v-card color="primary" dark class="mt-8">
            <v-container class="d-flex grow flex-wrap pb-0">
                <v-sheet
                    class="text-start mb-n6 pa-7 mr-2"
                    dark
                    width="auto"
                    max-height="90"
                    elevation="6"
                    color="success"
                    style="position: relative;top: -40px;transition: .3s ease;z-index: 1;"
                >
                    <v-icon size="32">mdi-checkbox-marked-circle-outline</v-icon>
                </v-sheet>
                <span class="display-1">
                {{$route.params.ProblemID}} A+B Problem
                </span>
            </v-container>
            <v-container class="d-flex grow flex-wrap pt-0">
                <v-btn rounded color="success" class="font-weight-black mr-2">
                    <v-icon left>mdi-checkbox-marked-circle</v-icon>
                    提交
                </v-btn>
                <v-btn rounded color="info" class="font-weight-black mr-2">
                    <v-icon left>mdi-format-list-checks</v-icon>
                    评测记录
                </v-btn>
                <v-btn rounded color="warning" class="font-weight-black mr-2">
                    <v-icon left>mdi-comment-text-multiple</v-icon>
                    讨论
                </v-btn>
                <v-btn rounded color="cyan" class="font-weight-black mr-2">
                    <v-icon left>mdi-comment-question-outline</v-icon>
                    问题
                </v-btn>
                <v-btn rounded color="error" class="font-weight-black mr-2">
                    <v-icon left>mdi-bug</v-icon>
                    Debug
                </v-btn>
                <v-btn rounded color="light-blue" class="font-weight-black mr-2">
                    <v-icon left>mdi-database</v-icon>
                    数据
                </v-btn>
                <v-btn rounded color="grey" class="font-weight-black mr-2">
                    <v-icon left>mdi-wrench</v-icon>
                    设置
                </v-btn>
            </v-container>
            <v-divider></v-divider>
            <v-container>
                <markdown :Markdown="MarkdownData"></markdown>
            </v-container>
        </v-card>
        <v-overlay :value="overlay" style="padding:20px 20px 20px 20px">
            <v-container style="margin:0px;padding:0px;height:100%;">
                <v-card light style="margin:0px;padding:0px;height:100%;">
                    <v-card-title>
                        <v-btn icon @click="overlay = false">
                            <v-icon dark>mdi-close</v-icon>
                        </v-btn>提交代码
                    </v-card-title>
                    <v-card outlined style="margin:10px;height:80%;box-sizing:border-box">
                        <v-container style="margin:0px;height:100%;width:100%">
                            <v-row style="margin:0px;padding:0pxheight:10%;">
                                <v-col align="left" class="pa-1" style="margin:0px;padding:0px">
                                    <v-select
                                        v-model="select"
                                        style="margin:0px;padding:0px;height:48px;"
                                        :items="Languages"
                                        item-text="text"
                                        item-value="lang"
                                        label="选择语言"
                                    ></v-select>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col align="right" class="pa-1" style="margin:0px;padding:0px">
                                    <v-btn rounded color="green" dark>
                                        <v-icon dark left>mdi-checkbox-marked-circle-outline</v-icon>提交
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-row style="margin:0px;height:90%;width:100%">
                                <div style="height:100%;width:100%;">
                                    <monaco :language="select" style="margin:0px;"></monaco>
                                </div>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-card>
            </v-container>
        </v-overlay>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Markdown from '../components/Markdown.vue';
import monaco from '../components/Monacoeditor.vue';

export default Vue.extend({
    components: { Markdown, monaco },
    data: () => {
        return {
            items: [
                {
                    text: 'GuOJ',
                    disabled: false,
                    to: { path: '/' }
                },
                {
                    text: '题库',
                    disabled: false,
                    to: { name: 'ProblemSet' }
                },
                {
                    text: '题目',
                    disabled: true
                }
            ],
            select: '',
            Languages: [
                { text: 'C', lang: 'c' },
                { text: 'C++ 98', lang: 'cpp98' },
                { text: 'C++ 11', lang: 'cpp11' },
                { text: 'C++ 14', lang: 'cpp14' },
                { text: 'C++ 17', lang: 'cpp17' },
                { text: 'C++ 20', lang: 'cpp20' },
                { text: 'C#', lang: 'csharp' },
                { text: 'Visual Basic .Net', lang: 'vb' },
                { text: 'F#', lang: 'fsharp' },
                { text: 'Java', lang: 'java' },
                { text: 'Kotlin', lang: 'kotlin' },
                { text: 'Scala', lang: 'scala' },
                { text: 'Clojure', lang: 'clojure' },
                { text: 'Python 2', lang: 'python2' },
                { text: 'Python 3', lang: 'python3' },
                { text: 'PyPy 2', lang: 'pypy2' },
                { text: 'PyPy 3', lang: 'pypy3' },
                { text: 'Ruby', lang: 'ruby' },
                { text: 'Lua', lang: 'lua' },
                { text: 'Perl', lang: 'perl' },
                { text: 'PHP 5.0', lang: 'php' },
                { text: 'JavaScript', lang: 'javascript' },
                { text: 'TypeScript', lang: 'typescript' },
                { text: 'Go', lang: 'golang' },
                { text: 'Rust', lang: 'rust' },
                { text: 'Haskell', lang: 'haskell' },
                { text: 'Lisp', lang: 'lisp' },
                { text: 'Racket', lang: 'racket' },
                { text: 'Wenyan(JavaScript)', lang: 'wenyanjs' },
                { text: 'Wenyan(Python)', lang: 'wenyanpy' },
                { text: 'Wenyan(Ruby)', lang: 'wenyanrb' },
                { text: 'Dongbei(Python)', lang: 'dongbeipy' }
            ],
            rate: '1',
            hardcolor: 'green',
            MarkdownData: '# 这里是题面',
            overlay: false
        };
    },
    computed:{
        BreadCrumbs() {
            return this.$store.getters['Theme/BreadCrumbs'];
        },  
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.overlay = false;
        });
    }
});
</script>

<style>
.v-overlay__content {
    height: 90%;
    width: 80%;
}
</style>
 