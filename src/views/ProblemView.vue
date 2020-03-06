<template>
    <v-container>
        <v-card color="primary" dark>
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
                    <v-icon dark color="green" style="margin: 0px 0px 0px 0px;">mdi-check</v-icon>
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
                            style="margin:0px 10px 0px 10px"
                        >
                            <v-icon dark left>mdi-checkbox-marked-circle-outline</v-icon>提交
                        </v-btn>
                        <v-btn rounded color="yellow darken-2" style="margin:0px 10px 0px 0px">
                            <v-icon dark left>mdi-format-list-checks</v-icon>提交记录
                        </v-btn>
                        <v-btn rounded color="blue" style="margin:0px 10px 0px 0px">
                            <v-icon dark left>mdi-card-text-outline</v-icon>测试数据
                        </v-btn>
                        <v-btn rounded color="cyan" style="margin:0px 10px 0px 0px">
                            <v-icon dark left>mdi-file-table-outline</v-icon>统计
                        </v-btn>
                        <v-btn rounded color="light-blue" style="margin:0px 10px 0px 0px">
                            <v-icon dark left>mdi-forum-outline</v-icon>讨论
                        </v-btn>
                        <v-btn rounded color="black lighten-2" style="margin:0px 10px 0px 0px">
                            <v-icon dark left>mdi-comment-question</v-icon>问答
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
                            <v-icon dark>mdi-close</v-icon>
                        </v-btn>提交代码
                    </v-card-title>
                    <v-card outlined style="margin:10px;height:80%">
                        <v-card-title style="margin:0px;padding:0px">
                            <v-container style="margin:0px;width:100%">
                                <v-row style="margin:0px;padding:0px">
                                    <v-col align="left" class="pa-1" style="margin:0px;padding:0px">
                                        <v-select
                                            v-model="select"
                                            style="margin:0px;padding:0px;height:48px;"
                                            :items="Languages"
                                            item-text="text"
                                            item-value="lang"
                                            label="选择语言"
                                            solo
                                        ></v-select>
                                    </v-col>
                                    <v-spacer></v-spacer>
                                    <v-col
                                        align="right"
                                        class="pa-1"
                                        style="margin:0px;padding:0px"
                                    >
                                        <v-btn rounded color="green" dark>
                                            <v-icon dark left>mdi-checkbox-marked-circle-outline</v-icon>提交
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-title>
                        <div style="padding:10px 10px 10px 10px;height:80%;width:100%">
                            <monaco :language="select" style="height:100%;width:100%"></monaco>
                        </div>
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
            select: '',
            Languages: [
                { text: "C++ 11", lang: "cpp" },
                { text: "TypeScript", lang: "typescript" }
            ],
            rate: "1",
            hardcolor: "green",
            MarkdownData: "# 这里是题面",
            overlay: false
        };
    }
});
</script>

<style>
.v-overlay__content {
    height: 90%;
    width: 80%;
}
</style>
 