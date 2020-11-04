<template>
    <MonacoEditor class="editor" :value="code" :language="lang" :theme="theme" @change="$emit('change', $event)" />
</template>

<script lang="ts">
import { Vue, Component, Prop, Model } from 'vue-property-decorator';
import MonacoEditor from 'vue-monaco';

@Component({
    components: {
        MonacoEditor
    }
})
export default class Monacoeditor extends Vue {
    @Model('change', { type: String, default: '' }) code: string;
    @Prop({ type: String, default: 'cpp' }) language: string;
    @Prop({ type: String, default: 'vs-dark' }) theme: string;

    get lang() {
        if (
            this.language == 'cpp98' ||
            this.language == 'cpp11' ||
            this.language == 'cpp14' ||
            this.language == 'cpp17' ||
            this.language == 'cpp20'
        ) {
            return 'cpp';
        }
        if (
            this.language == 'python2' ||
            this.language == 'python3' ||
            this.language == 'pypy2' ||
            this.language == 'pypy3'
        ) {
            return 'python';
        }
        return this.language;
    }
}
</script>

<style scoped>
    .editor {
        width: 100%;
        height: 100%;
    }
</style>
