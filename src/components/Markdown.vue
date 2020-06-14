<template>
    <v-card light color="white">
        <v-container>
            <vue-markdown>
                <slot></slot>
            </vue-markdown>
        </v-container>
    </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import VueMarkdown from 'vue-markdown-guoj';
import Prism from 'prismjs';
import 'prismjs/components/';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/download-button/prism-download-button';
import 'prismjs/plugins/show-language/prism-show-language';

export default Vue.extend({
    components: {
        VueMarkdown,
    },
    methods: {
        update() {
            this.$nextTick(() => {
                Prism.highlightAll();
            });
        },
    },
    mounted(){
        this.update();
    },
    updated(){
        this.update();
    }
});
</script>
<style>
code, pre {
    border-radius: none;
    box-shadow: none!important;
}
</style>