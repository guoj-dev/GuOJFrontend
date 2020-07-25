<template>
    <v-container class="ma-0 pa-0">
        <pre class="line-numbers"><code :class="'language-'+language"><slot></slot></code></pre>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Prism from 'prismjs';
import 'prismjs/plugins/autoloader/prism-autoloader';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/download-button/prism-download-button';
import 'prismjs/plugins/show-language/prism-show-language';

export default Vue.extend({
    methods: {
        update() {
            this.$nextTick(() => {
                Prism.highlightAll();
            });
        },
    },
    mounted() {
        this.update();
    },
    updated() {
        this.update();
    },
    props:['language']
});
</script>
<style>
code,
pre {
    border-radius: none;
    box-shadow: none !important;
}
code:after,
code:before {
    content: none !important;
}
</style>
