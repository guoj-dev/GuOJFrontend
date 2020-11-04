<template>
    <v-container class="ma-0 pa-0">
        <pre class="line-numbers"><code :class="'language-'+language"><slot></slot></code></pre>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
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

@Component
export default class CodeContainer extends Vue {
    @Prop(String) readonly language: string;

    update() {
        this.$nextTick(() => {
            Prism.highlightAll();
        });
    }

    mounted() {
        this.update();
    }

    updated() {
        this.update();
    }
}
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
