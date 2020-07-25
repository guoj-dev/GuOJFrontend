<template>
    <v-container>
        <v-card>
            <v-container>
                <div class="text-h2 ma-2">野兽先辈鸽子说</div>
                <v-divider></v-divider>
                <v-container>
                    <v-row>
                        <v-col>
                            <v-avatar size="40">
                                <v-img
                                    src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2006671067,2408814466&fm=26&gp=0.jpg"
                                ></v-img>
                            </v-avatar>
                            <span class="mx-2 text-body-1">田所浩二</span>
                            <span class="text-caption">1919年8月10日</span>
                        </v-col>
                        <v-col class="d-flex justify-end">
                            <span class="text-caption">#1</span>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="ma-0">
                            <markdown>114514!</markdown>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-btn small text><v-icon left small>mdi-arrow-up</v-icon>Upvote</v-btn>
                            <v-btn small text><v-icon left small>mdi-arrow-down</v-icon>Downvote</v-btn>
                            <v-btn small text><v-icon left small>mdi-comment-processing</v-icon>Reply</v-btn>
                            <v-btn small text><v-icon left small>mdi-exclamation</v-icon>Report</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
                <v-divider></v-divider>
            </v-container>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Markdown from '../components/Markdown.vue';
import monaco from '../components/Monacoeditor.vue';

export default Vue.extend({
    components: { Markdown, monaco },
});
</script>

<style>
.v-overlay__content {
    height: 90%;
    width: 80%;
}
</style>
