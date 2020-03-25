<template>
    <MonacoEditor class="editor" v-model="code" :language="lang" :theme="theme" />
</template>

<script lang="ts">
import Vue from "vue";
import MonacoEditor from "vue-monaco";
export default Vue.extend({
    components: {
        MonacoEditor
    },
    props: {
        code: {
            type: String,
            default: function() {
                return "";
            }
        },
        language: {
            type: String,
            default: function() {
                return "cpp";
            }
        },
        theme: {
            type: String,
            default: function() {
                return "vs-dark";
            }
        }
    },
    computed: {
        lang() {
            if (
                this.language == "cpp98" ||
                this.language == "cpp11" ||
                this.language == "cpp14" ||
                this.language == "cpp17" ||
                this.language == "cpp20"
            ) {
                return "cpp";
            }
            if (
                this.language == "python2" ||
                this.language == "python3" ||
                this.language == "pypy2" ||
                this.language == "pypy3"
            ) {
                return "python";
            }
            return this.language;
        }
    }
});
</script>

<style scoped>
.editor {
    width: 100%;
    height: 100%;
}
</style>