<template>
    <div class="monaco-container" style="height:100%;">
        <div ref="container" class="monaco-editor" style="height:100%;"></div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as monaco from "monaco-editor";
export default Vue.extend({
    props: {
        codes: {
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
        readOnly: {
            type: Boolean,
            default: function() {
                return false;
            }
        },
        editorOptions: {
            type: Object,
            default: function() {
                return {
                    value: this.codes,
                    language:this.language,
                    theme:"vs-dark",
                    selectOnLineNumbers: true,
                    roundedSelection: false,
                    readOnly: this.readOnly,
                    cursorStyle: "line", 
                    automaticLayout: false, 
                    glyphMargin: true, 
                    useTabStops: false,
                    fontSize: 14, 
                    autoIndent: false,
                    fontFamily:
                        "'Fira Mono', 'Bitstream Vera Sans Mono', 'Menlo', 'Consolas', 'Lucida Console', 'Source Han Sans SC', 'Noto Sans CJK SC', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', monospace"
                };
            }
        }
    },
    mounted() {
        this.monacoEditor = monaco.editor.create(this.$refs.container, this.editorOptions);
    },
    watch: {
        language(val)
        {
            if(this.monacoEditor)
            {
                this.monacoEditor=this.monacoEditor.getModifiedEditor()
                this.monaco.editor.setModelLanguage(this.monacoEditor.getModel(),val)
            }
        }
    }
});
</script>