<template>
    <v-container>
        <v-card light>
            <v-container style="padding: 12px 12px 0px">
                <v-chip label style="padding:4px 4px 4px 4px;" small="true" color="white">
                    <v-breadcrumbs style="padding:12px ;" light :items="items"></v-breadcrumbs>
                </v-chip>
            </v-container>
            <v-card-title>
                <v-btn
                    color="green"
                    rounded
                    outlined
                    small
                    icon
                    disable
                    style="margin: 0px 6px 0px 0px;"
                >
                    <v-icon light color="green" style="margin: 0px 0px 0px 0px;">mdi-check</v-icon>
                </v-btn>
                {{$route.params.ProblemID}} A+B Problem
            </v-card-title>
            <v-container style="padding: 0px 12px 12px">
                <v-row>
                    <v-col style="padding:0px;">
                        <v-chip
                            small="true"
                            outlined
                            elevation="12"
                            style="margin:6px 10px 0px 10px"
                        >
                            <v-rating
                                v-model="rate"
                                readonly="true"
                                half-increments="true"
                                color="yellow"
                            ></v-rating>
                        </v-chip>
                        <v-btn
                            rounded
                            color="green"
                            @click="overlay = true"
                            outlined
                            style="margin:0px 10px 0px 10px"
                        >
                            <v-icon light left>mdi-checkbox-marked-circle-outline</v-icon>提交
                        </v-btn>
                        <v-btn rounded color="yellow" outlined style="margin:0px 10px 0px 0px">
                            <v-icon light left>mdi-format-list-checks</v-icon>提交记录
                        </v-btn>
                        <v-btn rounded color="blue" outlined style="margin:0px 10px 0px 0px">
                            <v-icon light left>mdi-card-text-outline</v-icon>测试数据
                        </v-btn>
                        <v-btn rounded color="cyan" outlined style="margin:0px 10px 0px 0px">
                            <v-icon light left>mdi-file-table-outline</v-icon>统计
                        </v-btn>
                        <v-btn rounded color="light-blue" outlined style="margin:0px 10px 0px 0px">
                            <v-icon light left>mdi-forum-outline</v-icon>讨论
                        </v-btn>
                        <v-btn rounded color="black lighten-2" outlined style="margin:0px 10px 0px 0px">
                            <v-icon light left>mdi-comment-question</v-icon>问答
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
            <v-divider></v-divider>
            <v-card-text>
                <markdown :Markdown="MarkdownData">{{MarkdownData}}</markdown>
            </v-card-text>
        </v-card>
        <v-overlay :value="overlay" style="padding:20px 20px 20px 20px">
            <v-container style="margin:0px;padding:0px;height:100%;">
                <v-card light style="margin:0px;padding:0px;height:100%;">
                    <v-card-title>
                        <v-btn icon @click="overlay = false">
                            <v-icon light>mdi-close</v-icon>
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
                                    <v-btn rounded color="green" light outlined>
                                        <v-icon light left>mdi-checkbox-marked-circle-outline</v-icon>提交
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
import Vue from "vue";
import Markdown from "../components/Markdown.vue";
import monaco from "../components/Monacoeditor.vue";

export default Vue.extend({
    components: { Markdown, monaco },
    data: () => {
        return {
            items: [
                {
                    text: "GuOJ",
                    disabled: false,
                    to: { path: "/" }
                },
                {
                    text: "题库",
                    disabled: false,
                    to: { name: "ProblemSet" }
                },
                {
                    text: "题目",
                    disabled: true
                }
            ],
            select: "",
            Languages: [
                { text: "C", lang: "c" },
                { text: "C++ 98", lang: "cpp98" },
                { text: "C++ 11", lang: "cpp11" },
                { text: "C++ 14", lang: "cpp14" },
                { text: "C++ 17", lang: "cpp17" },
                { text: "C++ 20", lang: "cpp20" },
                { text: "C#", lang: "csharp" },
                { text: "Visual Basic .Net", lang: "vb" },
                { text: "F#", lang: "fsharp" },
                { text: "Java", lang: "java" },
                { text: "Kotlin", lang: "kotlin" },
                { text: "Scala", lang: "scala" },
                { text: "Clojure", lang: "clojure" },
                { text: "Python 2", lang: "python2" },
                { text: "Python 3", lang: "python3" },
                { text: "PyPy 2", lang: "pypy2" },
                { text: "PyPy 3", lang: "pypy3" },
                { text: "Ruby", lang: "ruby" },
                { text: "Lua", lang: "lua" },
                { text: "Perl", lang: "perl" },
                { text: "PHP 5.0", lang: "php" },
                { text: "JavaScript", lang: "javascript" },
                { text: "TypeScript", lang: "typescript" },
                { text: "Go", lang: "golang" },
                { text: "Rust", lang: "rust" },
                { text: "Haskell", lang: "haskell" },
                { text: "Lisp", lang: "lisp" },
                { text: "Racket", lang: "racket" },
                { text: "Wenyan(JavaScript)", lang: "wenyanjs" },
                { text: "Wenyan(Python)", lang: "wenyanpy" },
                { text: "Wenyan(Ruby)", lang: "wenyanrb" },
                { text: "Dongbei(Python)", lang: "dongbeipy" }
            ],
            rate: "1",
            hardcolor: "green",
            MarkdownData: "# 这里是题面",
            overlay: false
        };
    },
    mounted() {
        window.addEventListener("resize", () => {
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
 