<template>
    <v-card light color="white" outlined>
        <v-card-text>
            <div :v-html="html" style="color:#000;">
                <slot></slot>
            </div>
        </v-card-text>
    </v-card>
</template>


<script lang="js">
import Vue from "vue";
import mavonEditor from "mavon-editor-guoj";
import "mavon-editor-guoj/dist/css/index.css";

Vue.use(mavonEditor);
export default Vue.extend({
  props: [
      "Markdown"
  ],
  data() {
    return {
      html:""
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