<template>
    <v-card light color="white">
        <v-container>
            <div :v-html="html" style="color:#000;">
                <slot></slot>
            </div>
        </v-container>
    </v-card>
</template>


<script lang="ts">
import Vue from 'vue';
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

Vue.use(mavonEditor);
export default Vue.extend({
    props: [
        'Markdown'
    ],
    data() {
        return {
            html:''
        };
    },
    watch:{
        Markdown: function(val,oldVal) {
            this.Render(val);
        }
    },
    methods:{
        Render(val) {
            
        }
    }
});
</script>